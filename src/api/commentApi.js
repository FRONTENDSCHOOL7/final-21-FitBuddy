import { authInstance } from './axiosInstance';

// 댓글 작성
export const uploadComment = async (postId, comment) => {
  try {
    const response = await authInstance.post(`/post/${postId}/comments`, comment);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};

// 댓글 리스트
export const getCommentList = async (postId) => {
  try {
    const response = await authInstance.get(`/post/${postId}/comments/?limit=10&skip=0`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
