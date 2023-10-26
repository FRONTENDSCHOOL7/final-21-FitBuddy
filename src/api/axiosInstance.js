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

/* 푸시 전 삭제 */
export const axiosApi = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
