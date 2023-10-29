import { authInstance } from './axiosInstance';
// 게시글 생성
export const PostCreate = async (postData) => {
  const response = await authInstance.post(`/post`, postData);

  return response;
};

//게시글 전체보기
export const getPosts = async (postData) => {
  try {
    const response = await authInstance.get('/post?limit=5&skip=0', { data: postData });
    // 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 오류 처리
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
