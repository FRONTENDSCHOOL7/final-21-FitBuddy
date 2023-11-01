import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../../components/Common/Buttons/Button_L';
import Button_Img from '../../../components/Common/Buttons/Button_Img';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailProduct, deleteProduct } from '../../../api/productApi';
import PostJoin from '../../../components/Post/PostJoin';
import { BackIcon, NavTop, NavTopTitle } from '../../../components/Common/Nav/NavStyles';

const StyleGroupDetail = styled.div`
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #000;
  width: 414px;
  height: 900px;
  padding-right: 22px;
  font-size: 14px;

  & > div.contents {
    padding-left: 22px;
  }

  & > .back {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
  }
  .top-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    width: 200px;
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
  console.log(groupData);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <StyleGroupDetail>
      <div className='back'>
        <BackIcon onClick={handleBackClick} />
      </div>
      {groupData && groupData.product && groupData.product.itemImage && (
        <PlaceHolder type='Photo' src={groupData.product.itemImage} />
      )}
      <div className='contents'>
        <div className='top-title'>
          <h1 className='title'>{result.title}</h1>
          <PostJoin postId={groupId} />
        </div>
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

        <div className='description'>
          참여멤버 {people}명 / {result.attendees}명
        </div>
        <div className='imgBox'>
          <Button_Img />
          <Button_Img />
          <Button_Img />
        </div>

        <h2 className='description'>일정소개</h2>
        <p>{result.contents}</p>
        <ComFirmButton>
          <Button_L name='참여하기' />
        </ComFirmButton>
      </div>
    </StyleGroupDetail>
  );
}
