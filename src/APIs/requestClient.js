import axios from 'axios';

const requestClient = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
    timeout: 0,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default requestClient;