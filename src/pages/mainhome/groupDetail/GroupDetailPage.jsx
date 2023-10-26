import React from 'react';
import styled from 'styled-components';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../../components/Common/Buttons/Button_L';
import Button_Img from '../../../components/Common/Buttons/Button_Img';
const StyleGroupDetail = styled.div`
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #000;
  height: 900px;
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;

  .title {
    font-size: 24px;
    margin: 32px 0px 32px 0px;
  }
  .description {
    font-size: 20px;
    padding: 11px 0px 11px 0px;
  }
  .imgBox {
    display: flex;
    gap: 10px;
  }
`;

const StyleContent = styled.li`
  display: flex;

  div {
    color: gray;
  }
  p {
    padding-left: 21px;
    padding-bottom: 11px;
  }
`;
const ComFirmButton = styled.div`
  position: absolute;
  left: 12%;
  bottom: 4%;
`;

export default function GroupDetailPage() {
  return (
    <StyleGroupDetail>
      <PlaceHolder type='Photo' />
      <div>
        <h1 className='title'>헬스 배우고 싶은 분</h1>
        <ul>
          <StyleContent>
            <div>장소</div> <p>애월읍 위니브 감귤농장</p>
          </StyleContent>
          <StyleContent>
            <div>날짜</div> <p>2023년 10월 23일</p>
          </StyleContent>
          <StyleContent>
            <div>시간</div> <p>18:00</p>
          </StyleContent>
          <StyleContent>
            <div>인원</div> <p>7명</p>
          </StyleContent>
          <StyleContent>
            <div>비용</div> <p>0원</p>
          </StyleContent>
        </ul>
      </div>

      <div className='description'>참여맴버 3명 / 7명</div>
      <div className='imgBox'>
        <Button_Img />
        <Button_Img />
        <Button_Img />
      </div>

      <h2 className='description'>일정소개</h2>
      <p>여기서 모입시다</p>
      <ComFirmButton>
        <Button_L name='참여하기' />
      </ComFirmButton>
    </StyleGroupDetail>
  );
}
