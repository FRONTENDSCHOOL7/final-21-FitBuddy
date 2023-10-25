import { axiosApi } from './axiosInstance';

export const PostCreate = async (postData) => {
  const response = await axiosApi.post(`/post`, postData);

  return response;
};
