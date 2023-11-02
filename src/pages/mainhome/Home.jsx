import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import titleIcon from '../../assets/icons/icon-logo.svg';
import Chip from '../../components/Common/Chip/Chip';
import Card from '../../components/Card/Card';
import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import { getProducts } from '../../api/productApi';
import { Link, useNavigate } from 'react-router-dom';
import NavBottom from '../../components/Common/Nav/NavBottom';

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
    margin-bottom: 60px;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 6%;
  gap: 12px;
  margin: 25px 11px 15px 11px;
  width: 300px;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none; // 스크롤바 숨기기 (선택적)
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  & > div {
    flex: 0 0 auto;
  }
`;
const StyleCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  /* overflow-y: auto; // 스크롤 가능하게 유지
  &::-webkit-scrollbar {
    display: none; // 웹킷 기반 브라우저에서 스크롤바를 숨깁니다.
  } */
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
  const [selectedSport, setSelectedSport] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/addgroup');
  };

  const handleSelectSport = (e) => {
    const sport = e.target.getAttribute('data-sport'); // 예를 들어, data-sport 속성을 사용한다고 가정
    console.log('선택됨:', sport);
    setSelectedSport(sport);
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

  //인피니티 스크롤
  useEffect(() => {
    // 사용자가 페이지 끝에 도달했는지 확인하는 함수
    function checkScrollEnd() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 // 50px 전에 로드 시작
      ) {
        setPage((prev) => prev + 1); // 페이지 번호 증가
      }
    }
    window.addEventListener('scroll', checkScrollEnd);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', checkScrollEnd);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts(page);
        setProducts((prev) => [...prev, ...data.product]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchData();
  }, [page]);

  const categoryRef = useRef();

  // 마우스 이벤트 핸들러
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - categoryRef.current.offsetLeft);
    categoryRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - categoryRef.current.offsetLeft;
    const scrollLeft = x - startX;
    categoryRef.current.scrollLeft -= scrollLeft;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
    categoryRef.current.style.cursor = 'grab';
  };

  return (
    <StyleHome>
      <img src={titleIcon} alt='title' className='titleIcon' />
      <CategoryWrapper
        ref={categoryRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUpOrLeave}
        onMouseUp={onMouseUpOrLeave}
      >
        <Chip
          sport='전체'
          active={selectedSport === '전체'}
          onClick={() => handleSelectSport('전체')}
        />
        <Chip
          sport='🏌골프'
          active={selectedSport === '🏌골프'}
          onClick={() => handleSelectSport('🏌골프')}
        />
        <Chip
          sport='🎣낚시'
          active={selectedSport === '🎣낚시'}
          onClick={() => handleSelectSport('🎣낚시')}
        />
        <Chip sport='🏕캠핑' active={false} />
        <Chip sport='🏍바이크' active={false} />
        <Chip sport='🚴자전거' active={false} />
        <Chip sport='⛰등산' active={false} />
        <Chip sport='🏃‍♂️러닝' active={false} />
        <Chip sport='🏋헬스' active={false} />
        <Chip sport='🤸필라테스' active={false} />
        <Chip sport='🏋️‍♂️크로스핏' active={false} />
        <Chip sport='🧘🏽‍♂️요가' active={false} />
        <Chip sport='⚽축구' active={false} />
        <Chip sport='🏀농구' active={false} />
        <Chip sport='⚾야구' active={false} />
        <Chip sport='🎱당구' active={false} />
        <Chip sport='🎱포켓볼' active={false} />
        <Chip sport='⚽풋살' active={false} />
      </CategoryWrapper>
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
      <NavBottom />
    </StyleHome>
  );
}
