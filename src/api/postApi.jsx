import { axiosApi } from './axiosInstance';

// 게시글 보내기
export const PostCreate = async (postData) => {
  const response = await axiosApi.post(`/post`, postData);

  return response;
};

// 게시글 목록 가져오기
export const getPosts = async (postData) => {
  try {
    const response = await axiosApi.get('/post?limit=5&skip=0', { data: postData });
    // 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error('Error fetching posts:', error);
    throw error; // 오류를 호출자에게 전파
  }
};

// 게시글 상세페이지 가져오기

export const getDetailPost = async (postId) => {
  try {
    const response = await axiosApi.get(`/post/${postId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
