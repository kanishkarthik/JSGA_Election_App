import axios from 'axios';
import config from '../config';

const API_URL = `${config.serviceApiUrl}/categories`; 

const getCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getCategories,  
};
