import axios from 'axios';

const requestClients = axios.create({
    baseURL: 'https://thinkpro-api.vercel.app/api',
    timeout: 0,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default requestClients;