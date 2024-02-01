import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.VITE_REACT_APP_API_URL}`,
  timeout: 36000,
  headers: {},
  crossdomain: true
});

export default instance;
