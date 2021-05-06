import axios from 'axios';

const api = axios.create({
  baseURL: process.env.YOUR_IP || 'http://192.168.15.11:3333',
});

export default api;
