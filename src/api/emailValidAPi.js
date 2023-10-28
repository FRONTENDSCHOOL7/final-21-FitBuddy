import { instance } from './axiosInstance';

// 이메일 중복확인
export const emailValid = async (emailData) => {
  const response = await instance.post(`/user/emailvalid`, emailData);

  return response;
};
