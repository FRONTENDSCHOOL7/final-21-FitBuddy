import React, { useEffect, useState } from 'react';
import Button_Ms from '../../components/Common/Buttons/Button_Ms';
import IconWrite from '../../assets/icons/icon-write.svg';
import Iconnext from '../../assets/icons/icon-next.svg';
import { getMyInfo, editProfile } from '../../api/mypageapi';
import { useNavigate } from 'react-router-dom';
import NavBottom from '../../components/Common/Nav/NavBottom';
import {
  Interests,
  Introduction,
  Label,
  MypageHeader,
  MypageWrapper,
  NameInput,
  Posts,
  ProfileImage,
  ProfileImages,
  ProfileImageset,
  ProfileIntro,
  SaveButton,
  StyledInputFile,
  StyledTextarea,
  TitleWithEdit,
} from './StyledMypage';

export default function Mypage() {
  const [profiles, setProfiles] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const submitEdit = () => {
    const editData = {
      user: {
        username: profiles,
        intro,
        image,
      },
    };
    editProfile(editData);
  };

  // 프로필 정보 불러오기
  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setProfiles(data.user.username);
        setIntro(data.user.intro);
        setImage(data.user.image);
        console.log(data.user);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
      });
  }, []);

  // 이미지 업로드
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

  // 이름 변경
  const handleChangeName = (event) => {
    setProfiles(event.target.value);
  };

  // 이미지 파일 가져오기
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  // 소개글
  const handleIntroChange = (event) => {
    setIntro(event.target.value);
  };

  //저장 클릭
  const handleClick = () => {
    submitEdit();
    handleSave();
  };

  // 저장
  const handleSave = () => {
    alert('저장되었습니다!');
  };

  // 로그아웃
  const handleLogout = () => {
    localStorage.clear();
    console.log('로그아웃 되었습니다.');
    alert('로그아웃 되었습니다!');
    navigate('/login');
  };

  return (
    <div>
      <MypageWrapper>
        <MypageHeader>
          마이페이지
          <Button_Ms name='로그아웃' onClick={handleLogout} />
        </MypageHeader>

        <ProfileIntro>
          <ProfileImages>
            <ProfileImage src={image} />
            <ProfileImageset>
              <Label className='input-file-button' htmlFor='input-file'>
                사진 선택하기
              </Label>
              <StyledInputFile
                type='file'
                id='input-file'
                name='프로필 이미지'
                onChange={handleChangeImage}
              />
              <SaveButton onClick={handleClick}>저장</SaveButton>
            </ProfileImageset>
          </ProfileImages>

          <TitleWithEdit>
            <p>이름 </p>
            <div>
              {/* <img src={IconWrite} alt='수정 아이콘' onClick={submitEdit} /> */}
              <SaveButton onClick={handleClick}>저장</SaveButton>
            </div>
          </TitleWithEdit>
          <NameInput value={profiles} type='text' onChange={handleChangeName} />
        </ProfileIntro>

        <Introduction>
          <TitleWithEdit>
            <p>소개글</p>
            <div>
              {/* <img src={IconWrite} alt='수정 아이콘' onClick={submitEdit} /> */}
              <SaveButton onClick={handleClick}>저장</SaveButton>
            </div>
          </TitleWithEdit>
          <StyledTextarea value={intro || ''} onChange={handleIntroChange} />
        </Introduction>

        <Interests>
          <TitleWithEdit>
            <p>나의 관심사</p>
            <img src={IconWrite} alt='수정 아이콘' onClick={() => navigate('/onBoard')} />
          </TitleWithEdit>
        </Interests>

        <Posts>
          <TitleWithEdit>
            <p>작성한 모집글</p>
            <img src={Iconnext} alt='다음 버튼' onClick={() => navigate('/mypagejoin')} />
          </TitleWithEdit>
        </Posts>

        <TitleWithEdit>
          <p>내가 쓴 글</p>
          <img src={Iconnext} alt='다음 버튼' onClick={() => navigate('/mypagewrite')} />
        </TitleWithEdit>
        <NavBottom />
      </MypageWrapper>
    </div>
  );
}
