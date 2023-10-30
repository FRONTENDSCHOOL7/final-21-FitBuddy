import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Iconnext from '../../assets/icons/icon-next.svg';
import Card from '../../components/Card/Card.jsx';
import { getMyProducts } from '../../api/productApi.jsx';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  margin-bottom: 50px;
  font-family: 'Pretendard-Medium';
`;

const Myjointitle = styled.p`
  display: flex;
  align-items: left;
  font-family: 'Pretendard-Medium'; /* 글로벌 스타일 한 번에 */
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Myjoinpost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Mypagemyjoin() {
  // const { accountname } = useParams();
  const { accountname = 'gitbuddy98' } = useParams();
  const [myProduct, setMyProduct] = useState([]);
  let processedData = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getDetailPost 함수를 호출하여 게시물 정보 가져오기
        const data = await getMyProducts(accountname);
        setMyProduct(data);
      } catch (error) {
        console.error('Error fetching group data:', error);
      }
    };

    fetchData();
  }, [accountname]);

  let result = {};
  if (myProduct.product) {
    const myJoinData = myProduct.product;
    processedData = myJoinData.map((product) => {
      return {
        createdAt: product.createdAt,
        author: product.author.accountname,
        itemName: product.itemName,
        itemImage: product.itemImage,
        link: product.link,
        //보낼 때 링크에 인원수, 장소,
        price: product.price,
        // 다른 필요한 정보도 추가할 수 있습니다
      };
    });
    console.log(processedData);
    console.log('이건 ');
  } else {
    console.log('로딩중 ');
  }
  // console.log(result);

  return (
    <MypageWrapper>
      <MypageHeader>작성한 모집글</MypageHeader>
      {processedData.map((data, index) => (
        <div key={index}>
          <Myjointitle>
            <p>{data.createdAt}</p>
          </Myjointitle>
          <Myjoinpost>
            {/* 같은날짜가 있을 때에는 그 렝스만큼 반복문 */}
            <Card
              // key={item._id}
              // title={result.title}
              // time={result.time}
              // sport={result.sport}
              // location={result.location}
              // day={result.day}
              // cost={result.cost}
              // attendees={result.attendees}
              key={index}
              title={data.itemName}
              time={data.link}
              sport={data.link}
              location={data.link}
              day={data.link}
              cost={data.link}
              attendees={data.link}
            />
          </Myjoinpost>
        </div>
      ))}
      {/* <Myjointitle>
        <p>2023. 10. 12</p>
      </Myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <Myjointitle>
        <p>2023. 10. 10</p>
      </Myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <Myjointitle>
        <p>2023. 10. 5</p>
      </Myjointitle>
      <Myjoinpost>
        <CardWrap>
          <Card />
          <Card />
        </CardWrap>
      </Myjoinpost> */}
    </MypageWrapper>
  );
}
