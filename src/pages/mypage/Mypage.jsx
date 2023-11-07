import React, { useEffect, useState } from 'react';
import Button_Ms from '../../components/Common/Buttons/Button_Ms';
import IconWrite from '../../assets/icons/icon-write.svg';
import Iconnext from '../../assets/icons/icon-next.svg';
import { getMyInfo, editProfile } from '../../api/mypageapi';
import { useNavigate } from 'react-router-dom';
import NavBottom from '../../components/Common/Nav/NavBottom';
import iconWrite from '../../assets/icons/icon-write.svg';
import {
  AccountName,
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
import { async } from 'q';

export default function Mypage() {
  const [accountName, setAccountName] = useState('');
  const [profiles, setProfiles] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [isEditingAccountName, setIsEditingAccountName] = useState(false);
  const [editedAccountName, setEditedAccountName] = useState('');

  const navigate = useNavigate();

  const submitEdit = async () => {
    const editData = {
      user: {
        username: profiles,
        intro,
        image,
      },
    };
    try {
      await editProfile(editData); // API 호출을 기다립니다.
      alert('프로필이 업데이트 되었습니다!');
    } catch (error) {
      console.error('프로필 업데이트 실패:', error);
      alert('프로필 업데이트에 실패했습니다.');
    }
  };

  // 프로필 정보 불러오기
  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setAccountName(data.user.accountname);
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

  // 이미지 파일 가져오기 및 업로드
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      uploadImage(imageFile)
        .then(() => {
          // 이미지 업로드가 성공한 후에 프로필 정보를 업데이트합니다.
          submitEdit();
        })
        .catch((error) => {
          console.error('Image upload failed', error);
        });
    }
  };

  // 이미지 선택을 위한 클릭 핸들러
  const handleImageClick = () => {
    document.getElementById('input-file').click();
  };

  // 저장 버튼 클릭 핸들러
  const handleSaveClick = () => {
    submitEdit();
    handleSave();
  };

  // 소개글
  const handleIntroChange = (event) => {
    setIntro(event.target.value);
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
  // 계정명 수정 아이콘 클릭 시 핸들러
  const handleEditAccountNameClick = () => {
    setEditedAccountName(accountName); // 현재 계정명으로 입력 필드 초기화
    setIsEditingAccountName(true); // 입력 필드 보이게 설정
  };

  // 새로운 계정명 저장 시 핸들러
  const handleAccountNameSave = () => {
    // 유효성 검사 및 제출 로직을 여기에 작성하고 나서:
    setAccountName(editedAccountName); // 계정명을 새로운 값으로 업데이트
    setIsEditingAccountName(false); // 입력 필드 다시 숨김
  };
  // 계정명 혹은 입력 필드 렌더링 기능
  const renderAccountNameOrInput = () => {
    return isEditingAccountName ? (
      <div className='accountbox'>
        <NameInput
          value={editedAccountName}
          onChange={(e) => setEditedAccountName(e.target.value)}
        />
        <SaveButton onClick={handleAccountNameSave}>저장</SaveButton>
      </div>
    ) : (
      <div className='accountbox'>
        <div>@{accountName}</div>
        <img src={iconWrite} alt='수정' onClick={handleEditAccountNameClick} />
      </div>
    );
  };

  const handleNavigateJoin = () => {
    console.log('이미지테스트', profiles);
    navigate('/mypagejoin', { state: { image: image, myAccountname: accountName } });
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
            <StyledInputFile
              type='file'
              id='input-file'
              name='프로필 이미지'
              onChange={handleChangeImage}
              style={{ display: 'none' }}
            />

            <ProfileImage src={image} onClick={handleImageClick} />
          </ProfileImages>
          <AccountName>{renderAccountNameOrInput()}</AccountName>

          <TitleWithEdit>
            <p>이름</p>
            <div>
              <SaveButton onClick={handleSaveClick}>저장</SaveButton>{' '}
            </div>
          </TitleWithEdit>
          <NameInput value={profiles} type='text' onChange={handleChangeName} />
        </ProfileIntro>

        <Introduction>
          <TitleWithEdit>
            <p>소개글</p>
            <div>
              <SaveButton onClick={handleSaveClick}>저장</SaveButton>{' '}
              {/* 이 버튼도 handleSaveClick을 사용합니다. */}
            </div>
          </TitleWithEdit>
          <StyledTextarea value={intro || ''} onChange={handleIntroChange} />
        </Introduction>

        <Interests>
          <TitleWithEdit>
            <p>나의 관심사</p>
            <img
              src={Iconnext}
              alt='다음 버튼'
              onClick={() => navigate('/mypagejoin', { state: { image: image } })}
            />
          </TitleWithEdit>
        </Interests>

        <Posts>
          <TitleWithEdit>
            <p>작성한 모집글</p>
            <img src={Iconnext} alt='다음 버튼' onClick={handleNavigateJoin} />
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
