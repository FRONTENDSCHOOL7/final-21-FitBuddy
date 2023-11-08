import React, { useState, useEffect } from 'react';
import PlaceHolder from '../../../components/Common/Placeholder/PlaceHolder';
import ButtonL from '../../../components/Common/Buttons/ButtonL';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../../api/productApi';
import PostJoin from '../../../components/Post/PostJoin';
import { getProfile, getMyInfo } from '../../../api/mypageapi';
import userImg from '../../../assets/placeholder/Placeholder-avatar.svg';
import Chip from '../../../components/Common/Chip/Chip';
import { useFirestore } from '../../../hooks/useFirestore';
import crown from '../../../assets/icons/icon-leader.svg';
import { useCollection } from '../../../hooks/useCollection';
import NavTopDetails from '../../../components/Common/Nav/NavTopDetails';
import {
  ComFirmButton,
  StyleContent,
  StyleGroupDetail,
  StyleJoinMember,
} from './StyledGroupDetail';

export default function GroupDetailPage({ uid }) {
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState([]);
  const [people, setPeople] = useState(1);
  const [authorProfile, setAuthorProfile] = useState('');
  const [authorId, setAuthorId] = useState('');
  // const [user, setUser] = useState('');
  const [joinUser, setJoinUser] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [myId, setMyId] = useState('');
  const { addDocument, response } = useFirestore('FitBuddyGroup');
  const { documents, err } = useCollection('FitBuddyGroup', ['postId', '==', groupId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailProduct(groupId);
        setGroupData(data);
      } catch (error) {
        console.error('Error fetching group data:', error);
      }
    };

    fetchData();
  }, [groupId]);

  useEffect(() => {
    if (documents) {
      setPeople(documents.length + 1);
    }
  }, [documents]);

  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setMyId(data.user._id);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (groupData && groupData.product.author) {
          const authorData = groupData.product.author;

          const data = await getProfile(authorData.accountname);
          setAuthorProfile(data);

          setAuthorId(groupData.product.author._id);
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
  }
  console.log(result);
  console.log(groupData);
  // 이전 handleGroupJoin 내용
  const handleGroupJoin = async (event) => {
    event.preventDefault();
    try {
      const data = await getMyInfo();
      if (data) {
        setJoinUser(data.user);
      }

      if (authorId && joinUser) {
        let isUserJoined = false;
        //저자와 내가 다른 사람일 때
        if (data.user._id !== authorId) {
          if (documents) {
            documents.forEach((document) => {
              if (document.postId === groupId) {
                if (document.user._id !== data.user._id && document.user._id !== myId) {
                  if (people < result.attendees) {
                    isUserJoined = true;
                    alert('참여 완료!');
                    console.log('upPeople', people);
                  } else {
                    isUserJoined = false;
                    alert('모집 인원이 가득 찼습니다');
                  }
                } else {
                  isUserJoined = false;
                  alert('이미 참여 중입니다');
                }
              }
            });
          }
          if (documents.length === 0) {
            isUserJoined = true;
            alert('참여 완료!');
            console.log('DownPeople', people);
          }
        } else {
          console.log('포스트 작성자입니다');
        }
        if (isUserJoined) {
          addDocument({
            user: data.user,
            postId: groupId,
          });
        }
      }
    } catch (error) {
      console.error('Error during handleGroupJoin:', error);
    }
  };

  return (
    <StyleGroupDetail>
      <NavTopDetails title='핏버디 그룹 참여하기' />
      {groupData && groupData.product && groupData.product.itemImage && (
        <PlaceHolder type='Photo' src={groupData.product.itemImage} />
      )}
      <div className='contents'>
        <div className='top-title'>
          <h1 className='title'>{result.title}</h1>
          <PostJoin postId={groupId} authorId={authorId} visable={false} />
        </div>
        <ul>
          <StyleContent>
            <div className='sport'>
              {result.sport &&
                result.sport
                  .split(',')
                  .map((sport, index) => <Chip key={index} active='active' sport={sport.trim()} />)}
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
              <img className='leader' src={crown} alt='crown' />
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
          {documents &&
            documents
              .filter((document) => document.postId === groupId)

              .map((document) => {
                const myImg = document.user.image;
                const myName = document.user.username;
                return (
                  <StyleJoinMember key={document.id}>
                    <div className='placeholder-container'>
                      <PlaceHolder type='JoinMember' src={myImg ? myImg : userImg} />
                    </div>
                    <p>{myName ? myName : '이름없음'}</p>
                  </StyleJoinMember>
                );
              })}
        </div>

        <h2 className='description'>일정소개</h2>
        <p>{result.contents}</p>
        <ComFirmButton>
          <ButtonL
            name={disabled ? '참여완료' : '참여하기'}
            onClick={handleGroupJoin}
            disabled={disabled}
          />
        </ComFirmButton>
      </div>
    </StyleGroupDetail>
  );
}
