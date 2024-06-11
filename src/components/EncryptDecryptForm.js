import React from 'react';

const styles = {
    container: {
        width: '45%',
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start'
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
    },
    textarea: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minHeight: '100px',
        marginBottom: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    },
};

const EncryptDecryptForm = ({ action, data, setData, handleAction }) => (
    <div style={styles.container}>
        <label style={styles.label}><strong>Data to {action === 'encrypt' ? 'Encrypt' : 'Decrypt'}:</strong></label>
        <textarea
            style={styles.textarea}
            value={data}
            onChange={(e) => setData(e.target.value)}
        />
        <button style={styles.button} onClick={() => handleAction()}>{action.charAt(0).toUpperCase() + action.slice(1)}</button>
    </div>
);

export default EncryptDecryptForm;
