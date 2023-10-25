import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputText from '../../components/Common/Input/InputText';
import PlaceHolder from '../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../components/Common/Buttons/Button_L';

const StyleAddGroup = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
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

export default function AddGroup() {
  const [formData, setFormData] = useState({
    title: '',
    sport: '',
    time: '',
    day: '',
    location: '',
    attendees: '',
    cost: '',
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    setDisabled(!isFormValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <StyleAddGroup>
      <InputBox>
        <p>이미지 등록</p>
        <PlaceHolder type='Ractangle' />
      </InputBox>
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
          <InputText
            name='sport'
            placeholder='운동종목을 입력해주세요'
            onChange={handleInputChange}
            value={formData.sport}
          />
        </InputBox>
        <InputBox>
          <p>날짜</p>
          <InputText
            name='day'
            placeholder='날짜를 입력해주세요'
            onChange={handleInputChange}
            value={formData.day}
          />
        </InputBox>
        <InputBox>
          <p>시간</p>
          <InputText
            name='time'
            placeholder='시간을 입력해주세요'
            onChange={handleInputChange}
            value={formData.time}
          />
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
      </div>
      <Button_L name='완료' disabled={disabled} />
    </StyleAddGroup>
  );
}
