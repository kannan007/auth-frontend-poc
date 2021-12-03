import axios from 'axios';
import { getToken } from '../utils';

const getAccessToken = async () => {
  return getToken();
};

let Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

Api.interceptors.request.use(async (config) => {
  await getAccessToken().then((accessToken) => {
    config.headers['authorization'] = accessToken ? `Bearer ${accessToken}` : '';
  });
  return config;
});

export default Api;
