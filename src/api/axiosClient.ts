import axios from 'axios';

const apiBaseUrl = import.meta.env.SITE_API_BASE_URL as string;

export const axiosClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
