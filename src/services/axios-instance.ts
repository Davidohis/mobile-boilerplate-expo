import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const instance: any = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 36000,
  headers: {}
});

export default instance;
