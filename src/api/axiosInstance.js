import axios from 'axios';

export const URL = 'https://api.mandarin.weniv.co.kr/';
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2NTljYjJjYjIwNTY2Mzg1YmE1MCIsImV4cCI6MTcwMzM5NTkwMSwiaWF0IjoxNjk4MjExOTAxfQ.hIBT9nbiDBl1epL0792BNldjGFcKAJzkAuPYlDmhr_I';

/* 기본 인스턴스 */
export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosApi = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

//auth
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (config.headers.Authorization.includes('null')) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    console.log('intercepter2', config);
    return config;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
