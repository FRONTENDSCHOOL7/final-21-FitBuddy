import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import titleIcon from '../../assets/icons/icon-logo.svg';
import Chip from '../../components/Common/Chip/Chip';
import Card from '../../components/Card/Card';
import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import { getProducts } from '../../api/productApi';
import { Link, useNavigate } from 'react-router-dom';

const StyleHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(--color-bg);
  width: inherit;
  height: 900px;
  padding-left: 22px;
  padding-right: 22px;
  max-height: 800px;

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
  a {
    text-decoration: none; /* 링크의 밑줄을 제거합니다 */
  }
`;
const StyleAddButton = styled.div`
  position: absolute;
  bottom: 120px;
  right: 16px;
`;

export default function Home() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/addgroup');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        console.log(data);

        setProducts(data.product);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
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
        {products
          .filter((item) => item.itemName === 'FitBuddy') // 조건에 맞는 아이템만 필터링
          .map((item) => {
            let link = item.link;
            let data = link.split('\n');
            const result = {};

            for (let i = 1; i < data.length - 1; i++) {
              const line = data[i].trim();
              const [key, value] = line.split(':');
              result[key.trim()] = value.trim().replace(/,+$/, '');
            }

            // <Card key={item._id} content={item.content} />;

            return (
              <Link to={`/group/${item._id}`} key={item._id}>
                <Card
                  key={item._id}
                  image={item.itemImage}
                  title={result.title}
                  time={result.time}
                  sport={result.sport}
                  location={result.location}
                  day={result.day}
                  cost={result.cost}
                  attendees={result.attendees}
                  contents={result.contents}
                />
              </Link>
            );
          })}
      </StyleCards>
      <Link to='/addgroup'>
        <StyleAddButton>
          <ButtonFloating />
        </StyleAddButton>
      </Link>
    </StyleHome>
  );
}
