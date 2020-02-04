import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-33c72.firebaseio.com/'
});

export default instance;