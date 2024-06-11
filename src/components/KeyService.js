import axios from 'axios';

const API_ENDPOINT = 'https://localhost:32784/api/Cryptography';

const fetchKeys = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching keys:", error);
    }
};

const handleLifecycleEvent = async (keyId, algorithm, action) => {
    try {
        const url = `${API_ENDPOINT}/${action}`;
        const postData = { keyId, algorithm };
        const response = await axios.post(url, postData);
        return response.data;
    } catch (error) {
        console.error("Error handling lifecycle event:", error);
    }
};

const handleEncryptDecrypt = async (selectedKey, data, action) => {
    try {
        const url = `${API_ENDPOINT}/${action}`;
        const requestData = {
            algorithm: selectedKey.algorithmType,
            keyId: selectedKey.keyId,
            data
        };
        const response = await axios.post(url, requestData);
        return response.data;
    } catch (error) {
        console.error("Error encrypting/decrypting:", error);
    }
};

const generateKey = async (algorithm, keyLength) => {
    try {
        // Construct the URL for the "generate" route
        const url = `${API_ENDPOINT}/create`; // Assuming API_ENDPOINT is defined as your base API URL

        // Data to be sent in the POST request
        const postData = {
            algorithm: algorithm,
            keySize: keyLength,
        };

        // Making a POST request to the "generate" route
        const response = await axios.post(url, postData);

        // Handle the response as needed
        console.log('Generated key:', response.data);

        // You can return the generated key or any other data as needed
        return response.data;
    } catch (error) {
        console.error('Error generating key:', error);
        throw error;
    }
};


export { fetchKeys, handleLifecycleEvent, handleEncryptDecrypt, generateKey};
