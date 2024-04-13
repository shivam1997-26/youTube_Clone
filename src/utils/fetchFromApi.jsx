import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': 'afac571246msh4c2f6e464764257p10566cjsn4c2152211178',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};