import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import titleIcon from '../../assets/icons/icon-logo.svg';
import Chip from '../../components/Common/Chip/Chip';
import Card from '../../components/Card/Card';
import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import { getPosts } from '../../api/postApi';
import { Link } from 'react-router-dom';

const StyleHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #000;
  width: inherit;
  height: 900px;
  padding-left: 22px;
  padding-right: 22px;

  .titleIcon {
    max-width: 40%;
    max-height: 40%;
    margin-top: 34px;
  }
`;
const StyleChips = styled.div`
  display: flex;
  gap: 12px;
  margin: 25px 11px 15px 11px;
`;
const StyleCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
const StyleAddButton = styled.div`
  position: absolute;
  bottom: 120px;
  right: 16px;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getPosts 함수를 호출하여 데이터를 가져옴
    getPosts()
      .then((data) => {
        // 데이터를 상태에 저장
        setPosts(data.posts);
        console.log(data.posts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <StyleHome>
      <img src={titleIcon} alt='title' className='titleIcon' />
      <StyleChips>
        <Chip />
        <Chip />
        <Chip />
      </StyleChips>
      <StyleCards>
        {posts.map((item) => {
          let content = item.content;
          let data = content.split('\n');
          const result = {};

          for (let i = 1; i < data.length - 1; i++) {
            const line = data[i].trim();
            const [key, value] = line.split(':');
            result[key.trim()] = value.trim();
          }
          console.log(result);

          // <Card key={item._id} content={item.content} />;

          return (
            <Link to={`/group/${item._id}`} key={item._id}>
              <Card
                key={item._id}
                title={result.title}
                time={result.time}
                sport={result.sport}
                location={result.location}
                day={result.day}
                cost={result.cost}
                attendees={result.attendees}
              />
            </Link>
          );
        })}
      </StyleCards>
      <StyleAddButton>
        <ButtonFloating />
      </StyleAddButton>
    </StyleHome>
  );
}
