import axios from 'axios';
import React from 'react';

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/login',
      {
        user: {
          email: email,
          password: password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
