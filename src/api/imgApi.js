import axios from 'axios';
import { URL } from './axiosInstance';

export const postUploadImg = async (formData) => {
  try {
    const res = await axios.post(`${URL}/image/uploadfile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postUploadImgs = async (formData) => {
  try {
    const res = await axios.post(`${URL}/image/uploadfiles`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
