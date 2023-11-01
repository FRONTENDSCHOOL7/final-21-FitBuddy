import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import InputText from '../../../components/Common/Input/InputText';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../../components/Common/Buttons/Button_L';
import { PostCreate } from '../../../api/postApi';
import NavTopBack from '../../../components/Common/Nav/NavTopBack';
import NavTopDetails from '../../../components/Common/Nav/NavTopDetails';
import { ProductCreate } from '../../../api/productApi';
import UploadImg from '../../../assets/placeholder/Placeholder-img.svg';
import { useNavigate } from 'react-router-dom';
import InputButton from '../../../components/Common/Input/InputButton';
import OnBoardingPage from '../../onBoard/OnBoardingPage';
import Modal from 'react-modal';
import Chip from '../../../components/Common/Chip/Chip';

const StyleAddGroup = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 900px;
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 36px;
    margin-bottom: 38px;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  },
};

export const ImageBtn = styled.button`
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  background-color: var(--color-gray);
  background-image: url(${UploadImg});
  background-repeat: no-repeat;
  background-size: 100px;
  position: absolute;
  background-size: cover;
  bottom: 10px;
  right: 10px;
`;

export default function AddGroup() {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);

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
  const handleOpenOnBoarding = () => {
    setShowOnBoarding(!showOnBoarding);
    if (!showOnBoarding) {
      setSelectedSports([]);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostAdd = async (event) => {
    event.preventDefault();
    const dateRegex = /(\d{4}-\d{2}-\d{2})/;
    const timeRegex = /(\d{1,2})시(\d{1,2})분/;
    // 입력 형식 정규식
    console.log(formData);
    const datematch = formData.day.replace(/\s/g, '').match(dateRegex); // 입력 값과 정규식 매칭
    const timematch = formData.time.replace(/\s/g, '').match(timeRegex); // 입력 값과 정규식 매칭

    if (!datematch) {
      console.log('날짜 형식이 올바르지 않습니다.');
      return;
    }

    if (!timematch) {
      console.log('시간 형식이 올바르지 않습니다.');
      return;
    }
    try {
      const response = await ProductCreate({
        product: {
          itemName: 'FitBuddy',
          price: 1, //1원 이상
          link: link,
          itemImage: image ? image : UploadImg,
        },
      });
      console.log(response.data);

      if (response.status === 200) {
        console.log('성공');
        console.log(response.data);
        navigate('/home');
      }
    } catch (err) {
      console.log('실패');
      console.error(err);
    }
  };

  //진짜
  const [formData, setFormData] = useState({
    title: '',
    sport: '',
    time: '',
    day: '',
    location: '',
    attendees: '',
    cost: '',
    contents: '',
  });
  const link = `
  title: ${formData.title},
  sport: ${formData.sport},
  day: ${formData.day},
  time: ${formData.time},
  location: ${formData.location},
  attendees: ${formData.attendees},
  cost: ${formData.cost},
  contents: ${formData.contents},
`;

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log(formData);
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    setDisabled(!isFormValid);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'day') {
      const dateRegex = /(\d{4}-\d{2}-\d{2})/;
      const isValidDate = dateRegex.test(value);
      setDateError(isValidDate ? '' : '날짜 형식이 올바르지 않습니다.');
    } else if (name === 'time') {
      const timeRegex = /(\d{1,2})시(\d{1,2})분/;
      const timeValue = value.replace(/\s/g, '');
      const isValidTime = timeRegex.test(timeValue);
      setTimeError(isValidTime ? '' : '시간 형식이 올바르지 않습니다.');
    }
  };

  const handleCategory = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  useEffect(() => {
    console.log(selectedSports);
  }, [selectedSports]);

  const navigate = useNavigate();
  return (
    <StyleAddGroup>
      <NavTopDetails title='핏버디 그룹 만들기' />
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
        <ImageBtn onClick={handleCategory} htmlFor='file' />
      </div>
      <div className='inputs'>
        <InputBox>
          <p>제목</p>
          <InputText
            name='title'
            placeholder='제목을 입력해주세요'
            onChange={handleInputChange}
            value={formData.title}
          />
        </InputBox>
        <InputBox>
          <p>운동종목</p>
          <div style={{ gap: '12px', display: 'flex' }}>
            {selectedSports.map((sport, index) => (
              <Chip key={index} sport={sport} />
            ))}
          </div>
          <InputButton
            name='sport'
            placeholder='운동종목을 입력해주세요'
            onChange={handleInputChange}
            onClick={handleOpenOnBoarding}
            value={formData.sport}
          />
        </InputBox>
        <Modal
          isOpen={showOnBoarding}
          onRequestClose={handleOpenOnBoarding}
          style={customModalStyles}
        >
          <OnBoardingPage
            onClick={handleOpenOnBoarding}
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
        </Modal>

        <InputBox>
          <p>날짜</p>
          <InputText
            name='day'
            placeholder='날짜를 입력해주세요(20XX-XX-XX)'
            onChange={handleInputChange}
            value={formData.day}
          />
          {dateError && <p style={{ color: '#FF5B5B' }}>{dateError}</p>}
        </InputBox>
        <InputBox>
          <p>시간</p>
          <InputText
            name='time'
            placeholder='시간을 입력해주세요(XX시 XX분)'
            onChange={handleInputChange}
            value={formData.time}
          />
          {timeError && <p style={{ color: '#FF5B5B' }}>{timeError}</p>}
        </InputBox>
        <InputBox>
          <p>장소</p>
          <InputText
            name='location'
            placeholder='장소를 입력해주세요'
            onChange={handleInputChange}
            value={formData.location}
          />
        </InputBox>
        <InputBox>
          <p>인원</p>
          <InputText
            name='attendees'
            placeholder='인원을 입력해주세요'
            onChange={handleInputChange}
            value={formData.attendees}
          />
        </InputBox>
        <InputBox>
          <p>비용</p>
          <InputText
            name='cost'
            placeholder='비용을 입력해주세요'
            onChange={handleInputChange}
            value={formData.cost}
          />
        </InputBox>
        <InputBox>
          <p>일정소개</p>
          <InputText
            name='contents'
            placeholder='일정 내용을 입력해주세요'
            onChange={handleInputChange}
            value={formData.contents}
          />
        </InputBox>
      </div>
      <Button_L name='완료' disabled={disabled} onClick={handlePostAdd} />
    </StyleAddGroup>
  );
}
