import { authInstance } from './axiosInstance';

// 댓글 작성
export const uploadComment = async (postId, comment) => {
  try {
    const response = await authInstance.post(`/post/${postId}/comments`, comment);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};

// 댓글 리스트
export const getCommentList = async (postId, feedData) => {
  try {
    const response = await authInstance.get(`/post/${postId}/comments/?limit=100&skip=0`, {
      data: feedData,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//댓글 삭제
export const deleteComment = async (postId, commentId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
