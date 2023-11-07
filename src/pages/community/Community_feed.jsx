import React, { useRef, useState, useEffect } from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import ChipsHome from '../../components/Chips/ChipsHome';
import InputLarge from '../../components/Common/Input/InputLarge';
import Button_L from '../../components/Common/Buttons/Button_L';
import { CommunityWrapper, CategoryTitle, IconBtn } from './StyledCommunity';
import { useNavigate } from 'react-router-dom';
import { PostCreate } from '../../api/postApi';
import { axiosApi } from '../../api/axiosInstance';
import PlaceHolder from '../../components/Common/Placeholder/PlaceHolder';
import { putEditPost } from '../../api/postApi';
import { useParams } from 'react-router-dom';
import { InputWrapper, StyledActualInput, CharacterCount } from './StyledCommunity';

export default function Community_feed() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('all');
  const { postId } = useParams();
  const MAX_LENGTH = 200;
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);

  //수정 페이지인지 판별
  const isEditMode = !!postId;
  console.log(isEditMode);

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
        content: link,
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
      console.error('요청 에러:', error.message);
      alert('게시물 수정 실패');
    }
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
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

  const addPost = async (addPostData) => {
    try {
      const res = await axiosApi.post('post', addPostData);
      if (res.status !== 200) {
        console.error('에러:', res.statusText);
      }
      const data = res.data;
      console.log(data);
      navigate('/community');

      if (data.error) {
        console.error('에러:', data.error);
      }
    } catch (error) {
      console.error('에러 발생:', error.message);

      if (error.response && error.response.data && error.response.data.message) {
        alert('실패' + error.response.data.message);
      } else {
        alert('등록 실패');
      }
    }
  };
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (isEditMode && content) {
      const contentRegex = /content: (.*),/;
      const extractedContent = content.match(contentRegex)[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        content: extractedContent.trim(), // 이전 데이터에서 content 값을 가져옵니다
      }));
      console.log(formData.content);
    }
  }, [isEditMode, content]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'content' && value.length <= MAX_LENGTH) {
      setText(value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const link = `
    title: 'FitBuddy',
    content: ${formData.content},
    category: ${category} 
  `;

  const handleCategory = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //사진과 글을 쓸 때만 버튼 보이도록
  useEffect(() => {
    if (image && formData.content.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [image, formData.content]);

  return (
    <>
      <NavTopDetails title={isEditMode ? '게시글 수정' : '새 게시글'} />
      <CommunityWrapper>
        <CategoryTitle>이미지 등록</CategoryTitle>
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
        <CategoryTitle className='category'>카테고리 선택</CategoryTitle>
        <ChipsHome selectedCategory={category} onCategoryChange={handleCategoryChange} />
        <InputWrapper>
          <StyledActualInput
            placeholder='작성해주세요'
            onChange={handleInputChange}
            name='content'
            value={formData.content}
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
          disabled={disabled}
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
