import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import Button_L from '../../../components/Common/Buttons/Button_L';
import Button_Img from '../../../components/Common/Buttons/Button_Img';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailProduct, deleteProduct } from '../../../api/productApi';
import PostJoin from '../../../components/Post/PostJoin';
import { BackIcon, NavTop, NavTopTitle } from '../../../components/Common/Nav/NavStyles';
import { getProfile, getMyInfo } from '../../../api/mypageapi';
import userImg from '../../../assets/placeholder/Placeholder-avatar.svg';
import Chip from '../../../components/Common/Chip/Chip';
import { useFirestore } from '../../../hooks/useFirestore';
import crown from '../../../assets/icons/icon-leader.svg';

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
    min-width: 350px;
    font-size: 24px;
    margin: 32px auto 15px auto;
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

  .sport {
    margin-bottom: 20px;
  }
`;
const ComFirmButton = styled.div`
  position: absolute;
  left: 12%;
  bottom: 4%;
`;

const StyleJoinMember = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0;
  }
  .placeholder-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leader {
    position: absolute;
    top: -5px;
    left: 35px;
    width: 30px;
    z-index: 10;
  }
`;

export default function GroupDetailPage({ uid }) {
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState([]);
  const [people, setPeople] = useState(3);
  const [authorProfile, setAuthorProfile] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [myId, setMyId] = useState('');
  const [joinUser, setJoinUser] = useState([]);
  const { addDocument, response } = useFirestore('groupJoin');

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (groupData && groupData.product.author) {
          const authorData = groupData.product.author;

          const data = await getProfile(authorData.accountname);
          setAuthorProfile(data);

          console.log('계정 정보 확인', authorData);
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    };
    fetchData();
  }, [groupData]);

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
  const handleGroupJoin = async (event) => {
    event.preventDefault();
    try {
      const myData = await getMyInfo();
      setJoinUser(myData);
      console.log('내 정보', myData);
      console.log(joinUser);
      addDocument({
        // uid,
        joinUser,
      });
    } catch (error) {
      console.error('Error during handleGroupJoin:', error);
    }
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
          <PostJoin postId={groupId} visable={false} />
        </div>
        <ul>
          <StyleContent>
            <div className='sport'>
              <Chip key={result.sport} sport={result.sport} />
            </div>
          </StyleContent>
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
          <StyleJoinMember>
            <div className='placeholder-container'>
              <img className='leader' src={crown} />
              {authorProfile && authorProfile.profile && authorProfile.profile.image ? (
                <PlaceHolder type='JoinMember' src={authorProfile.profile.image} />
              ) : (
                <PlaceHolder type='JoinMember' src={userImg} />
              )}
            </div>
            {authorProfile && authorProfile.profile && authorProfile.profile.username ? (
              <p>{authorProfile.profile.username}</p>
            ) : (
              <p>{/* fallback content */}</p>
            )}
          </StyleJoinMember>

          <StyleJoinMember>
            <div className='placeholder-container'>
              <PlaceHolder type='JoinMember' src={userImg} />
            </div>
            {/* <p>{username}</p> */}
          </StyleJoinMember>
        </div>

        <h2 className='description'>일정소개</h2>
        <p>{result.contents}</p>
        <ComFirmButton>
          <Button_L name='참여하기' onClick={handleGroupJoin} />
        </ComFirmButton>
      </div>
    </StyleGroupDetail>
  );
}
