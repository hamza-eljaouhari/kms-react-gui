import React, { useState, useEffect } from 'react';
import { fetchKeys, handleLifecycleEvent, handleEncryptDecrypt, generateKey } from './KeyService'; // Assuming you have a generateKey function in KeyService
import KeySelect from './KeySelect';
import EncryptDecryptForm from './EncryptDecryptForm';
import KeyTable from './KeyTable';
import GenerateKeyForm from './GenerateKeyForm'; // Import the new component


const styles = {
    container: {
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textAreasContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    keySelect: {
        width: '100%'
    }
};

const KeyManager = () => {
    const [keys, setKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const [encryptionData, setEncryptionData] = useState('');
    const [decryptionData, setDecryptionData] = useState('');

    useEffect(() => {
        const init = async () => {
            const fetchedKeys = await fetchKeys();
            setKeys(fetchedKeys || []);
        };
        init();
    }, []);

    const onLifecycleEvent = async (keyId, algorithm, action) => {
        await handleLifecycleEvent(keyId, algorithm, action);
        const updatedKeys = await fetchKeys();
        setKeys(updatedKeys || []);
    };

    const onEncryptDecrypt = async (action) => {
        if (!selectedKey) {
            alert('Please select a key.');
            return;
        }
        const data = action === 'encrypt' ? encryptionData : decryptionData;
        const result = await handleEncryptDecrypt(selectedKey, data, action);

        if (action === 'encrypt') {
            setEncryptionData('');
            setDecryptionData(result || '');
        } else {
            setDecryptionData('');
            setEncryptionData(result || '');
        }
    };

    const onGenerateKey = async (algorithm, keyLength) => {
        try {
            // Call the generateKey function to generate a key
            await generateKey(algorithm, keyLength);

            // Refresh the list of keys to include the newly generated key
            const updatedKeys = await fetchKeys();
            setKeys(updatedKeys || []);
        } catch (error) {
            console.error('Error generating key:', error);
        }
    };

    return (
        <div className="p-4" style={styles.container}>
            <GenerateKeyForm algorithms={['AES', 'RSA']} onGenerateKey={onGenerateKey} />
            <KeySelect style={styles.keySelect} keys={keys} setSelectedKey={setSelectedKey} />
            <br />
            <div style={styles.textAreasContainer}>
                <EncryptDecryptForm style={styles.textArea} action="encrypt" data={encryptionData} setData={setEncryptionData} handleAction={() => onEncryptDecrypt('encrypt')} />
                <br />
                <EncryptDecryptForm style={styles.textArea} action="decrypt" data={decryptionData} setData={setDecryptionData} handleAction={() => onEncryptDecrypt('decrypt')} />
            </div>
            <br />
            <KeyTable keys={keys} onLifecycleEvent={onLifecycleEvent} />
        </div>
    );
};

export default KeyManager;
