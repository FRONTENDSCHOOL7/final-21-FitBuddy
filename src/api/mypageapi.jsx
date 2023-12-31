import { axiosApi } from './axiosInstance';
import { authInstance } from './axiosInstance';

//내 프로필 불러오기
export const getMyInfo = async (userData) => {
  const response = await axiosApi.get('/user/myinfo', userData);

  return response.data;
};

//개인 프로필
export const getProfile = async (accountname) => {
  const response = await authInstance.get(`/profile/${accountname}`);

  return response.data;
};

//프로필 정보 수정하기
export const editProfile = async (editData) => {
  const response = await authInstance.put(`/user`, editData);

  return response.data;
};
