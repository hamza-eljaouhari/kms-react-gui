import React from 'react';


const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '1rem',
    },
    th: {
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        padding: '0.75rem',
        textAlign: 'left',
    },
    td: {
        border: '1px solid #dee2e6',
        padding: '0.75rem',
    },
    select: {
        padding: '0.25rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '0.25rem',
    },
};

const KeyTable = ({ keys, onLifecycleEvent }) => (
    <table style={styles.table}>
        <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-gray-600">Key ID</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-600">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-600">Algorithm</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-600">Actions</th>
            </tr>
        </thead>
        <tbody>
            {keys.map(key => (
                <tr key={key.keyId}>
                    <td className="border border-gray-300 px-4 py-2">{key.keyId}</td>
                    <td className="border border-gray-300 px-4 py-2">{key.status}</td>
                    <td className="border border-gray-300 px-4 py-2">{key.algorithmType}</td>
                    <td style={styles.td}>
                        <select style={styles.select} onChange={(e) => onLifecycleEvent(key.keyId, key.algorithmType, e.target.value)}>
                            <option value="activate">Activate</option>
                            <option value="deactivate">Deactivate</option>
                            <option value="archive">Archive</option>
                            <option value="recover">Recover</option>
                            <option value="revoke">Revoke</option>
                            <option value="destroy">Destroy</option>
                        </select>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default KeyTable;
