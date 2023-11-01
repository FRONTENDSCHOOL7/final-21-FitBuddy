import { authInstance } from './axiosInstance';

// 게시글 생성
export const PostCreate = async (postData) => {
  const response = await authInstance.post(`/post`, postData);
  return response;
};

//게시글 전체보기
export const getPosts = async (postData) => {
  try {
    const response = await authInstance.get('/post?limit=10&skip=0', { data: postData });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getDetailPost = async (postId) => {
  try {
    const response = await authInstance.get(`/post/${postId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

//게시글 수정
export const putEditPost = async (postId, postData) => {
  try {
    const response = await authInstance.put(`/post/${postId}`, postData);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts: ', error);
    throw error;
  }
};

//게시글 삭제
export const PostDelete = async (postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    // throw error;
  }
};

// 좋아요
export const postLike = async (postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/heart`);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};
//좋아요 취소
export const postUnlike = async (postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}/unheart`);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};
