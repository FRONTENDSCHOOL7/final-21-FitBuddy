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
import { axiosApi } from '../../api/axiosInstance';
import PlaceHolder from '../../components/Common/Placeholder/PlaceHolder';

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
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  // const submitAddPost = (e) => {
  //   e.preventDefault();


    const addPostData = {
      post: {
        content,
        image,
      },
    };
    console.log(addPostData);
    addPost(addPostData);
  };


  const submitAddPost = async () => {
    try {

      const res = await axiosApi.post('post', addPostData);
      if (res.status !== 200) {
        console.error('HTTP 응답 코드:', res.status, '상태 메시지:', res.statusText);
      }
      const data = res.data;
      console.log(data);
      navigate('/community');

      if (data.error) {
        console.error('서버에서 반환한 에러:', data.error);
      }
    } catch (error) {
      console.error('요청 중 에러 발생:', error.message);
      // error.response를 확인하여 서버에서 보내는 오류 메시지를 확인
      if (error.response && error.response.data && error.response.data.message) {
        alert('아이템 등록에 실패했습니다: ' + error.response.data.message);
      } else {
        alert('아이템 등록에 실패했습니다!');
      }

//       const response = await PostCreate({
//         post: {
//           content: content,
//           image: 'http://146.56.183.55:5050/Ellipse.png',
//         },
//       });
//       console.log(response.data);

//       if (response.status === 200) {
//         console.log('성공');
//         console.log(response.data);
//       }
//     } catch (err) {
//       console.error(err);

    }
  };

  const inputContent = (e) => {
    setContent(e.target.value);

    console.log(content);

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
          <PlaceHolder type='Photo' src={image} />
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
