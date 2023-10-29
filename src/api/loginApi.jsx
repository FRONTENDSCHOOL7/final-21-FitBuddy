import { instance } from './axiosInstance';

export const PostLogin = async (userData) => {
  const response = await instance.post(`/user/login`, userData);

  return response;
};
