import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import ChipsHome from '../../components/Chips/ChipsHome';
import InputLarge from '../../components/Common/Input/InputLarge';
import Button_L from '../../components/Common/Buttons/Button_L';
import { CommunityPlaceHolder, CommunityWrapper, CategoryTitle, IconBtn } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { PostCreate } from '../../api/postApi';
import { uploadFile } from '../../Utils/uploadFile';

export default function Community_feed() {
  const navigate = useNavigate();
  // const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [formData, setFormData] = useState({
    content: '',
    image: '',
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePostAdd = async () => {
    try {
      let imageUrl = '';
      if (imageFile && imageFile.files) {
        imageUrl = await uploadFile(imageFile);
      }

      // 게시글 작성 API 호출
      const response = await PostCreate({
        post: {
          content: formData.content,
          image: imageUrl, // 이미지 URL 전달
        },
      });

      if (response.status === 200) {
        console.log('게시글 작성 성공');
        console.log(response.data);
        navigate('/community');
      }
    } catch (error) {
      console.error('게시글 작성 오류:', error);
    }
  };

  return (
    <>
      <NavTopDetails name='새 게시글' />
      <CommunityWrapper>
        <CommunityPlaceHolder type='Photo' src={imageFile ? URL.createObjectURL(imageFile) : ''} />
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <IconBtn onClick={() => document.querySelector('input[type="file"]').click()} />
        <CategoryTitle>카테고리 선택</CategoryTitle>
        <ChipsHome />
        <InputLarge onChange={handleInputChange} value={formData.content} name='content' />
        <Button_L name='완료' marginTop={50} onClick={handlePostAdd} />
      </CommunityWrapper>
    </>
  );
}
