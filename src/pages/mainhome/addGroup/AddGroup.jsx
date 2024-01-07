import React, { useState, useEffect, useRef } from 'react';
import InputText from '../../../components/Common/Input/InputText';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import ButtonL from '../../../components/Common/Buttons/ButtonL';
import NavTopDetails from '../../../components/Common/Nav/NavTopDetails';
import { createProducts, editProduct } from '../../../api/productApi';
import UploadImg from '../../../assets/placeholder/Placeholder-img.svg';
import { useNavigate } from 'react-router-dom';
import InputButton from '../../../components/Common/Input/InputButton';
import OnBoardingPage from '../../onBoard/OnBoardingPage';
import Modal from 'react-modal';
import Chip from '../../../components/Common/Chip/Chip';
import { useParams } from 'react-router-dom';
import KakaoMap from '../../../components/KakaoMap/KakaoMap';
import {
  StyledAddGroup,
  customModalStyles,
  StyleButtonL,
  InputBox,
  Overlay,
  ImageBtn,
  StyledInputName,
  ProgressBarContainer,
  ProgressBar,
  StyledInputRequireName,
  StyledTwoInputs,
  InputContainer,
  CounterInputBox,
  InputCreaseButton,
  InputPersonnel,
} from './StyledAddGroup';
import CategoryButton from '../../../components/Common/Input/CategoryButton';
import InputLarge from '../../../components/Common/Input/InputLarge';
import iconCalendar from '../../../assets/icons/icon-calendar.svg';
import iconSearch from '../../../assets/icons/icon-search2.svg';
import iconDown from '../../../assets/icons/icon-down.svg';
import InputTime from '../../../components/Common/Input/InputTime';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/esm/locale';

export default function AddGroup() {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);
  const { postId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);

  //수정 페이지인지 판별
  const isEditMode = !!postId;

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
    const imageUrl = baseUrl + json.filename;
    setImage(imageUrl);
  };

  //수정할 때 맨처음 페이지 랜더링
  useEffect(() => {
    if (isEditMode) {
      const EditPost = async () => {
        try {
          const response = await editProduct(postId);
          if (response) {
            setImage(response.product.itemImage);

            const result = {};
            const newFormData = response.product.link;
            let data = newFormData.split('\n');
            for (let i = 1; i < data.length - 1; i++) {
              const line = data[i].trim();
              const [key, value] = line.split(':');
              result[key.trim()] = value.trim().replace(/,+$/, '');
            }
            setFormData(result);

            const sportsFromServer = result.sport.split(', ').filter(Boolean);
            setSelectedSports(sportsFromServer);
          }
        } catch (error) {
          console.error('데이터 불러오기 오류', error);
        }
      };
      EditPost();
    }
  }, [isEditMode, postId]);

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
  const updateProduct = async (postId, postData) => {
    try {
      navigate(`/group/${postId}`);
    } catch (error) {
      console.error('요청 중 에러 발생:', error.message);
      alert('게시물 수정에 실패했습니다!');
    }
  };

  const handlePostAdd = async (event) => {
    event.preventDefault();
    const dateRegex = /(\d{4}-\d{2}-\d{2})/;
    const timeRegex = /(\d{1,2})시(\d{1,2})분/;
    // 입력 형식 정규식
    const datematch = formData.day.replace(/\s/g, '').match(dateRegex); // 입력 값과 정규식 매칭
    const timematch = formData.time.replace(/\s/g, '').match(timeRegex); // 입력 값과 정규식 매칭

    if (!datematch) {
      return;
    }

    if (!timematch) {
      return;
    }
    try {
      const postData = {
        product: {
          itemName: 'FitBuddy',
          price: 1,
          link: link,
          itemImage: image ? image : UploadImg,
        },
      };
      if (isEditMode) {
        updateProduct(postId, postData);
      } else {
        const response = await createProducts({
          product: {
            itemName: 'FitBuddy',
            price: 1,
            link: link,
            itemImage: image ? image : UploadImg,
          },
        });

        if (response.status === 200) {
          navigate('/home');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const [formData, setFormData] = useState({
    title: '',
    sport: '',
    time: '',
    day: formattedDate,
    location: '',
    attendees: '',
    cost: '',
    contents: '',
  });
  console.log(formattedDate);
  console.log(formData);

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
  const [isKakaoMapOpen, setKakaoMapOpen] = useState(false);
  const openKakaoMapModal = () => {
    setKakaoMapOpen(true);
  };

  const closeKakaoMapModal = () => {
    setKakaoMapOpen(false);
  };

  const handleLocationSelect = (address) => {
    setFormData((prevData) => ({ ...prevData, location: address }));
    closeKakaoMapModal();
  };

  useEffect(() => {
    const isFormValid = Object.values(formData).every((value) => {
      return typeof value === 'string' ? value.trim() !== '' : String(value).trim() !== '';
    });
    setDisabled(!isFormValid);
  }, [formData]);
  useEffect(() => {
    const sportsString = selectedSports.join(', ');

    setFormData((prevData) => ({
      ...prevData,
      sport: sportsString,
    }));
  }, [selectedSports]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // if (name === 'day') {
    //   const dateRegex = /(\d{4}-\d{2}-\d{2})/;
    //   const isValidDate = dateRegex.test(value);
    //   setDateError(isValidDate ? '' : '날짜 형식이 올바르지 않습니다.');
    // } else if (name === 'time') {
    //   const timeRegex = /(\d{1,2})시(\d{1,2})분/;
    //   const timeValue = value.replace(/\s/g, '');
    //   const isValidTime = timeRegex.test(timeValue);
    //   setTimeError(isValidTime ? '' : '시간 형식이 올바르지 않습니다.');
    // }
  };

  const handleCategory = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const increment = () => {
    setFormData({ ...formData, attendees: Number(formData.attendees) + 1 });
  };

  const decrement = () => {
    setFormData({ ...formData, attendees: Math.max(0, Number(formData.attendees) - 1) });
  };

  useEffect(() => {}, [selectedSports]);

  const navigate = useNavigate();

  return (
    <StyledAddGroup>
      <NavTopDetails
        title={isEditMode ? '그룹 만들기 수정' : '핏버디 그룹 만들기'}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <ProgressBarContainer>
        <ProgressBar step={currentStep + 1} />
      </ProgressBarContainer>
      {currentStep === 0 && (
        <div style={{ position: 'relative' }}>
          <StyledInputName>이미지 등록 (선택)</StyledInputName>
          <PlaceHolder type='Ractangle' src={image} />
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
      )}
      <div className='inputs'>
        {currentStep === 0 && (
          <>
            <InputBox>
              <StyledInputRequireName>제목</StyledInputRequireName>
              <InputText
                name='title'
                placeholder='제목을 입력해주세요'
                onChange={handleInputChange}
                value={formData.title}
              />
            </InputBox>
            <InputBox>
              <StyledInputRequireName>운동종목</StyledInputRequireName>
              <div className='categoryflex'>
                <div style={{ gap: '12px', display: 'flex' }}>
                  {selectedSports.map((sport, index) => (
                    <Chip key={index} sport={sport} />
                  ))}
                </div>
                {selectedSports.length > 0 ? (
                  <CategoryButton
                    name='sport'
                    placeholder='운동종목을 입력해주세요'
                    onChange={handleInputChange}
                    onClick={handleOpenOnBoarding}
                    value={formData.sport}
                  />
                ) : (
                  <InputButton
                    name='sport'
                    placeholder='운동종목을 입력해주세요'
                    onChange={handleInputChange}
                    onClick={handleOpenOnBoarding}
                    value={formData.sport}
                  />
                )}
              </div>
            </InputBox>
            <InputBox>
              <StyledInputName>상세 설명 (선택)</StyledInputName>
              <InputLarge
                name='contents'
                placeholder='일정 내용을 입력해주세요'
                onChange={handleInputChange}
                value={formData.contents}
              />
            </InputBox>
          </>
        )}
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
        {currentStep === 1 && (
          <>
            <StyledInputRequireName>날짜와 시간</StyledInputRequireName>
            <StyledTwoInputs>
              <InputContainer>
                <ReactDatePicker
                  name='day'
                  dateFormat='yyyy-MM-dd'
                  shouldCloseOnSelect
                  minDate={new Date('2000-01-01')}
                  maxDate={new Date('2050-01-01')}
                  selected={selectedDate}
                  value={formattedDate}
                  locale={ko}
                  onChange={(date) => {
                    setSelectedDate(date);
                  }}
                />

                <img src={iconCalendar} alt='calendar' />
              </InputContainer>

              {dateError && <p style={{ color: '#FF5B5B' }}>{dateError}</p>}
              <InputContainer>
                <InputTime
                  name='time'
                  onChange={handleInputChange}
                  value={formData.time}
                  autoComplete='off'
                />
                <img src={iconDown} alt='calendar' />
              </InputContainer>
            </StyledTwoInputs>
            <InputBox>
              <StyledInputName>장소</StyledInputName>
              <InputContainer>
                <InputText
                  name='location'
                  placeholder='장소를 입력해주세요'
                  onChange={handleInputChange}
                  value={formData.location}
                  onClick={openKakaoMapModal}
                  autoComplete='off'
                />
                <img src={iconSearch} alt='search' />
              </InputContainer>
            </InputBox>
          </>
        )}
        {isKakaoMapOpen && (
          <Overlay>
            <KakaoMap onRequestClose={closeKakaoMapModal} onSelectLocation={handleLocationSelect} />
          </Overlay>
        )}
        {currentStep === 2 && (
          <>
            <InputBox>
              <StyledInputRequireName>최대 참여인원</StyledInputRequireName>
              <CounterInputBox>
                <InputCreaseButton onClick={decrement}>-</InputCreaseButton>
                <InputPersonnel
                  name='attendees'
                  onChange={handleInputChange}
                  value={formData.attendees}
                  placeholder='0'
                  autocomplete='off'
                />
                <InputCreaseButton onClick={increment}>+</InputCreaseButton>
              </CounterInputBox>
            </InputBox>
            <InputBox>
              <StyledInputName>예상 비용(선택)</StyledInputName>
              <InputContainer>
                <InputText
                  name='cost'
                  placeholder='비용을 입력해주세요'
                  onChange={handleInputChange}
                  value={formData.cost}
                  autocomplete='off'
                />
                <p>원</p>
              </InputContainer>
            </InputBox>
          </>
        )}
      </div>
      {/* <StyleCompleteButton> */}
      {currentStep !== 2 && (
        <StyleButtonL>
          <ButtonL name='다음' onClick={handleNextStep} />
        </StyleButtonL>
      )}
      {currentStep === 2 && (
        <StyleButtonL>
          <ButtonL
            name={isEditMode ? '수정하기' : '완료'}
            disabled={disabled}
            onClick={handlePostAdd}
          />
        </StyleButtonL>
      )}
      {/* </StyleCompleteButton> */}
    </StyledAddGroup>
  );
}
