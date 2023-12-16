import React from 'react';

const styles = {
    container: {
        marginBottom: '1rem',
    },
    label: {
        marginRight: '0.5rem',
    },
    select: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
};

const KeySelect = ({ keys, setSelectedKey }) => (
    <div style={styles.container}>
        <label style={styles.label}>Select a Key:</label>
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
