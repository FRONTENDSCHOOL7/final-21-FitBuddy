import { authInstance, axiosApi } from './axiosInstance';
// 게시글 생성
export const PostCreate = async (postData) => {
  const response = await axiosApi.post(`/post`, postData);

  return response;
};

//게시글 전체보기
export const getPosts = async (postData) => {
  try {
    const response = await axiosApi.get('/post?limit=5&skip=0', { data: postData });
    // 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error('Error fetching posts:', error);
    throw error;
  }
};

//게시글 삭제
export const deletePost = async (token, postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
