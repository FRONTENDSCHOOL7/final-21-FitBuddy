import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import ChipsHome from '../../components/Chips/ChipsHome';
import InputLarge from '../../components/Common/Input/InputLarge';
import Button_L from '../../components/Common/Buttons/Button_L';
import { CommunityPlaceHolder, CommunityWrapper, CategoryTitle, IconBtn } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { PostCreate } from '../../api/postApi';
import userToken from '../../Recoil/userTokenAtom';

export default function Community_feed() {
  const token = useRecoilValue(userToken);

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  //이미지 업로드
  const uploadImage = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';

    const form = new FormData();

    form.append('image', imageFile);
    //폼바디 넣어서 요청하기
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
    });
    const json = await res.json();
    console.log(baseUrl + json.filename);
    const imageUrl = baseUrl + json.filename;
    setImage(imageUrl);
  };

  const handleChangeImage = (e) => {
    // 파일 가져오기
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  //게시글 작성

  //   const handlePostAdd = async () => {
  //     if (loading) return;
  //     try {
  //       setLoding(true);
  //       const response = await PostCreate({
  //         post: {
  //           content,
  //           image,
  //           createAt: Date.now(),
  //         },
  //       });

  //       if (response.status === 200) {
  //         console.log(response.data);
  //         // navigate('/community');
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   const [formData, setFormData] = useState({
  //     content: '',
  //   });
  //   const content = `
  //   content: ${formData.content},
  // `;

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const submitAddPost = (e) => {
    e.preventDefault();

    const addPostData = {
      post: {
        content,
        image,
      },
    };
    addPost(addPostData);
  };

  const addPost = async (addPostData) => {
    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/post', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(addPostData),
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      alert('아이템 등록에 실패했습니다!');
    }
  };

  const inputContent = (e) => {
    setContent(e.target.vale);
  };

  const handleCategory = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <NavTopDetails title='새 게시글' />
      <CommunityWrapper>
        <div style={{ position: 'relative' }}>
          <CommunityPlaceHolder type='Photo' src={image} />
          <input
            ref={inputRef}
            type='file'
            accept='image/*'
            onChange={handleChangeImage}
            id='file'
            style={{ display: 'none' }}
          />
          <IconBtn onClick={handleCategory} htmlFor='file' />
        </div>
        <CategoryTitle>카테고리 선택</CategoryTitle>
        <ChipsHome />
        <InputLarge onChange={inputContent} value={content} name='content' />
        <Button_L
          type='submit'
          name='완료'
          marginTop={50}
          onClick={submitAddPost}
          value={loading ? 'Posting...' : 'Post Feed'}
        />
      </CommunityWrapper>
    </>
  );
}
