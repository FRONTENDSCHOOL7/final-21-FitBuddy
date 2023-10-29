import { axiosApi } from './axiosInstance';

// 상품글 보내기
export const ProductCreate = async (productData) => {
  const response = await axiosApi.post(`/product`, productData);

  return response;
};

// 상품글 목록 가져오기
export const getProducts = async (productData) => {
  try {
    const response = await axiosApi.get('/product/?limit=5&skip=0', {
      data: productData,
    });
    // 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error('Error fetching products:', error);
    throw error; // 오류를 호출자에게 전파
  }
};

// 상품글 목록 본인 가져오기
export const getMyProducts = async (accountname) => {
  try {
    const response = await axiosApi.get(`/product/${accountname}/?limit=5&skip=0`);
    // 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error('Error fetching products:', error);
    throw error; // 오류를 호출자에게 전파
  }
};

// 상품글 상세페이지 가져오기
export const getDetailProduct = async (productId) => {
  try {
    const response = await axiosApi.get(`/product/detail/${productId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
