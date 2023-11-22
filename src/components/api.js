import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sigloxxi.alwaysdata.net/api', // Reemplaza esto con la URL de tu API
    headers: {
        'Authorization': 'Bearer Fuc3nRnbhPXFUROzJVAWoAupIzjCSIMr6LNNfEMAe5d95513',
    },
});

export default instance;
