import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shaadibazaarbackendnew.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
