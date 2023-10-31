import { instance } from './axiosInstance';

export const postSignUp = async (userData) => {
  const response = await instance.post(`/user`, userData);
  return response;
};
