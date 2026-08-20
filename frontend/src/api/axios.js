import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://codebet-7ykd.onrender.com/api', // or your backend URL
});

export default instance;