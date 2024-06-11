import React from 'react';

const styles = {
    container: {
        marginBottom: '1rem',
        width: '100%'
    },
    label: {
        marginRight: '0.5rem',
    },
    select: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
    },
};

const KeySelect = ({ keys, setSelectedKey }) => (
    <div style={styles.container}>
        <select style={styles.select} onChange={(e) => setSelectedKey(keys.find(key => key.keyId === e.target.value))}>
            <option value="">Select a key...</option>
            {keys.map(key => (
                <option key={key.keyId} value={key.keyId}>
                    {key.keyId} ({key.algorithmType})
                </option>
            ))}
        </select>
    </div>
);

export default KeySelect;
