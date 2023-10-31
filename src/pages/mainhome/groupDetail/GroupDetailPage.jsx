import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../../components/Common/Buttons/Button_L';
import Button_Img from '../../../components/Common/Buttons/Button_Img';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../../api/productApi';
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
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState([]);
  const [people, setPeople] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getDetailProduct 함수를 호출하여 게시물 정보 가져오기
        const data = await getDetailProduct(groupId);
        setGroupData(data);
      } catch (error) {
        console.error('Error fetching group data:', error);
      }
    };

    fetchData();
  }, [groupId]);

  let result = {};
  if (groupData.product && groupData.product.link) {
    const postData = groupData.product.link;
    let data = postData.split('\n');
    for (let i = 1; i < data.length - 1; i++) {
      const line = data[i].trim();
      const [key, value] = line.split(':');
      result[key.trim()] = value.trim().replace(/,+$/, '');
    }
  } else {
    console.log('로딩중 ');
  }
  console.log(result);

  return (
    <StyleGroupDetail>
      <PlaceHolder type='Photo' />
      <div>
        <h1 className='title'>{result.title}</h1>
        <ul>
          <StyleContent>
            <div>장소</div> <p>{result.location}</p>
          </StyleContent>
          <StyleContent>
            <div>날짜</div> <p>{result.day}</p>
          </StyleContent>
          <StyleContent>
            <div>시간</div> <p>{result.time}</p>
          </StyleContent>
          <StyleContent>
            <div>인원</div> <p>{result.attendees}</p>
          </StyleContent>
          <StyleContent>
            <div>비용</div> <p>{result.cost}</p>
          </StyleContent>
        </ul>
      </div>

      <div className='description'>
        참여멤버 {people}명 / {result.attendees}명
      </div>
      <div className='imgBox'>
        <Button_Img />
        <Button_Img />
        <Button_Img />
      </div>

      <h2 className='description'>소개</h2>
      <p>{result.contents}</p>
      <ComFirmButton>
        <Button_L name='참여하기' />
      </ComFirmButton>
    </StyleGroupDetail>
  );
}
