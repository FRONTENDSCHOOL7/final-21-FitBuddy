import { axiosApi } from './axiosInstance';
export const getMyInfo = async (userData) => {
  const response = await axiosApi.get('/user/myinfo', userData);

  return response.data;
};
