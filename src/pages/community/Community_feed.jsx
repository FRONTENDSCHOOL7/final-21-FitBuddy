import React, { useRef, useState, useEffect } from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import ChipsHome from '../../components/Chips/ChipsHome';
import InputLarge from '../../components/Common/Input/InputLarge';
import Button_L from '../../components/Common/Buttons/Button_L';
import { CommunityWrapper, CategoryTitle, IconBtn } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { PostCreate } from '../../api/postApi';
import { axiosApi } from '../../api/axiosInstance';
import PlaceHolder from '../../components/Common/Placeholder/PlaceHolder';
import { putEditPost } from '../../api/postApi';
import { useParams } from 'react-router-dom';
import { InputWrapper, StyledActualInput, CharacterCount } from './CommunityStyle';

export default function Community_feed() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const { postId } = useParams();
  const MAX_LENGTH = 200;
  const [text, setText] = useState('');

  //수정 페이지인지 판별
  const isEditMode = !!postId;

  useEffect(() => {
    if (isEditMode) {
      const EditPost = async () => {
        try {
          const response = await putEditPost(postId);
          if (response) {
            setContent(response.post.content);
            setImage(response.post.image);
          }
        } catch (error) {
          console.error('데이터 불러오기 오류', error);
        }
      };
      EditPost();
    }
  }, [postId]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log('클릭!');
    const postData = {
      post: {
        content,
        image,
      },
    };
    if (isEditMode) {
      updatePost(postId, postData);
    } else {
      addPost(postData);
    }
  };

  const updatePost = async (postId, postData) => {
    try {
      const res = await putEditPost(postId, postData);
      navigate('/community');
    } catch (error) {
      console.error('요청 중 에러 발생:', error.message);
      alert('게시물 수정에 실패했습니다!');
    }
  };

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

  //   const addPostData = {
  //     post: {
  //       content,
  //       image,
  //     },
  //   };
  //   console.log(addPostData);
  //   addPost(addPostData);
  // };

  const addPost = async (addPostData) => {
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

      if (error.response && error.response.data && error.response.data.message) {
        alert('아이템 등록에 실패했습니다: ' + error.response.data.message);
      } else {
        alert('아이템 등록에 실패했습니다!');
      }
    }
  };
  const inputContent = (e) => {
    setContent(e.target.value);
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    }
  };

  const handleCategory = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <NavTopDetails title={isEditMode ? '게시글 수정' : '새 게시글'} />
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
        <InputWrapper>
          <StyledActualInput
            placeholder='작성해주세요'
            onChange={inputContent}
            name='content'
            value={content}
          />
          <CharacterCount>
            {text.length}/{MAX_LENGTH}
          </CharacterCount>
        </InputWrapper>

        <Button_L
          type='submit'
          name={isEditMode ? '수정하기' : '완료'}
          marginTop={50}
          onClick={handleSubmission}
          value={
            loading
              ? isEditMode
                ? 'Updating...'
                : 'Posting...'
              : isEditMode
              ? 'Update Feed'
              : 'Post Feed'
          }
        />
      </CommunityWrapper>
    </>
  );
}
