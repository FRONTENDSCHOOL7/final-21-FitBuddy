import React, { useEffect, useRef, useState } from 'react';
import titleIcon from '../../assets/icons/icon-logo.svg';
import Chip from '../../components/Common/Chip/Chip';
import Card from '../../components/Card/Card';
import { getProducts } from '../../api/productApi';
import { Link } from 'react-router-dom';
import NavBottom from '../../components/Common/Nav/NavBottom';
import { getProfile } from '../../api/mypageapi';
import { CategoryWrapper, StyleAddButton, StyleCards, StyleHome } from './StyledHome';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedSport, setSelectedSport] = useState('전체');
  const setAuthorProfile = useState([]);
  // const [page, setPage] = useState(1);

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();

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
        // setPage((prev) => prev + 1); // 페이지 번호 증가
      }
    }
    window.addEventListener('scroll', checkScrollEnd);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', checkScrollEnd);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data.product);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);

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
    const scrollLeft = startX - x;
    categoryRef.current.scrollLeft += scrollLeft * 0.6;
    setStartX(e.pageX - categoryRef.current.offsetLeft);
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
    categoryRef.current.style.cursor = 'grab';
  };

  //저자의 id를 구해서 프로필 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (products) {
          for (const item of products.filter((item) => item.itemName === 'FitBuddy')) {
            const authorData = item.author;
            const data = await getProfile(authorData.accountname);
            setAuthorProfile(data);
          }
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    };
    fetchData();
  }, []);

  const transformProducts = (products, selectedSport) => {
    return products
      .filter((item) => item.itemName === 'FitBuddy')
      .map((item) => {
        let link = item.link;
        let data = link.split('\n');
        const result = {};

        for (let i = 1; i < data.length - 1; i++) {
          const line = data[i].trim();
          const [key, value] = line.split(':');
          result[key.trim()] = value.trim().replace(/,+$/, '');
        }
        return { ...item, ...result };
      })
      .filter((item) => {
        return (
          selectedSport === '전체' ||
          Array.isArray(item.sport) ||
          item.sport.includes(selectedSport)
        );
      });
  };

  const renderCards = (filteredItems) => {
    return filteredItems.map((filteredItem, index) => {
      return (
        <Link to={`/group/${filteredItem._id}`} key={filteredItem._id}>
          <Card
            key={filteredItem._id}
            groupId={filteredItem._id}
            image={filteredItem.itemImage}
            title={filteredItem.title}
            time={filteredItem.time}
            sport={filteredItem.sport}
            location={filteredItem.location}
            day={filteredItem.day}
            cost={filteredItem.cost}
            attendees={filteredItem.attendees}
            authorImg={filteredItem.author.image}
            contents={filteredItem.contents}
          />
        </Link>
      );
    });
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
        <Chip
          sport='🏕캠핑'
          active={selectedSport === '🏕캠핑'}
          onClick={() => handleSelectSport('🏕캠핑')}
        />
        <Chip
          sport='🏍바이크'
          active={selectedSport === '🏍바이크'}
          onClick={() => handleSelectSport('🏍바이크')}
        />
        <Chip
          sport='🚴자전거'
          active={selectedSport === '🚴자전거'}
          onClick={() => handleSelectSport('🚴자전거')}
        />
        <Chip
          sport='⛰등산'
          active={selectedSport === '⛰등산'}
          onClick={() => handleSelectSport('⛰등산')}
        />
        <Chip
          sport='🏃‍♂️러닝'
          active={selectedSport === '🏃‍♂️러닝'}
          onClick={() => handleSelectSport('🏃‍♂️러닝')}
        />
        <Chip
          sport='🏋헬스'
          active={selectedSport === '🏋헬스'}
          onClick={() => handleSelectSport('🏋헬스')}
        />
        <Chip
          sport='🤸필라테스'
          aactive={selectedSport === '🤸필라테스'}
          onClick={() => handleSelectSport('🤸필라테스')}
        />
        <Chip
          sport='🏋️‍♂️크로스핏'
          active={selectedSport === '🏋️‍♂️크로스핏'}
          onClick={() => handleSelectSport('🏋️‍♂️크로스핏')}
        />
        <Chip
          sport='🧘🏽‍♂️요가'
          active={selectedSport === '🧘🏽‍♂️요가'}
          onClick={() => handleSelectSport('🧘🏽‍♂️요가')}
        />
        <Chip
          sport='⚽축구'
          active={selectedSport === '⚽축구'}
          onClick={() => handleSelectSport('⚽축구')}
        />
        <Chip
          sport='🏀농구'
          active={selectedSport === '🏀농구'}
          onClick={() => handleSelectSport('🏀농구')}
        />
        <Chip
          sport='⚾야구'
          active={selectedSport === '⚾야구'}
          onClick={() => handleSelectSport('⚾야구')}
        />
        <Chip
          sport='🎱당구'
          active={selectedSport === '🎱당구'}
          onClick={() => handleSelectSport('🎱당구')}
        />
        <Chip
          sport='🎱포켓볼'
          active={selectedSport === '🎱포켓볼'}
          onClick={() => handleSelectSport('🎱포켓볼')}
        />
        <Chip
          sport='⚽풋살'
          active={selectedSport === '⚽풋살'}
          onClick={() => handleSelectSport('⚽풋살')}
        />
      </CategoryWrapper>

      <StyleCards>{renderCards(transformProducts(products, selectedSport))}</StyleCards>

      <Link to='/addgroup'>
        <StyleAddButton>{/* <ButtonFloating /> */}</StyleAddButton>
      </Link>
      <NavBottom />
    </StyleHome>
  );
}
