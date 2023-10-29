import axios from 'axios';

export const URL = 'https://api.mandarin.weniv.co.kr/';

/* 기본 인스턴스 */
export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//항상 최신 토큰 값을 사용
export const axiosApi = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// 모든 요청에 대해 로컬 스토리지에서 토큰을 찾아 토큰이 존재하면 Authorization 헤더를 설정합니다. (요청이 나갈때 마다 토큰을 확인하고 설정)
axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
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

//토큰 유효성 확인하지 않고 요청을 빠르게 보낼 때 사용
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});
// Authorization 헤더의 값이 null을 포함하는지 확인. 포함한다면, 로컬 스토리지에서 토큰을 다시 찾아 Authorization 헤더를 설정합니다.(처음에 설정된 토큰 값이 유효하지 않으면 요청이 나갈 때마다 토큰을 재확인하고 설정)
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
