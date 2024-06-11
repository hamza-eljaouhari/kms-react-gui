import React, { useState } from 'react';

const styles = {
    container: {
        marginBottom: '1rem',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
    },
    select: {
        padding: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
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

const GenerateKeyForm = ({ algorithms, onGenerateKey }) => {
    // Generate a list of possible key lengths based on the selected algorithm
    const possibleKeyLengths = {
        AES: [128, 192, 256],
        RSA: [1024, 2048, 3072, 4096],
    };
        
    const [algorithm, setAlgorithm] = useState(algorithms[0]); // Default algorithm
    const [keyLength, setKeyLength] = useState(possibleKeyLengths[algorithms[0]][0]); // Default key length

    const handleGenerateKey = () => {
        // Call the onGenerateKey function with the selected algorithm and key length
        onGenerateKey(algorithm, keyLength);
    };

    return (
        <>
            <label style={styles.label}><strong>Generate Key:</strong></label>
            <div style={styles.container}>
                <select style={styles.select} value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                    {algorithms.map((algo) => (
                        <option key={algo} value={algo}>
                            {algo}
                        </option>
                    ))}
                </select>
                <select style={styles.select} value={keyLength} onChange={(e) => setKeyLength(Number(e.target.value))}>
                    {possibleKeyLengths[algorithm].map((length) => (
                        <option key={length} value={length}>
                            {length} bits
                        </option>
                    ))}
                </select>
                <button style={styles.button} onClick={handleGenerateKey}>
                    Generate
                </button>
            </div>
        </>
    );
};

export default GenerateKeyForm;
