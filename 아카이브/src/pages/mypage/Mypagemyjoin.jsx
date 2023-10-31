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
  if (myProduct.product && myProduct.product.link) {
    const postData = myProduct.product.link;
    // let data = postData.split('\n');
    // for (let i = 1; i < data.length - 1; i++) {
    //   const line = data[i].trim();
    //   const [key, value] = line.split(':');
    //   result[key.trim()] = value.trim();
    // }
    console.log(postData);
  } else {
    console.log(myProduct.product);
    console.log('로딩중 ');
  }
  // console.log(result);

  return (
    <MypageWrapper>
      <MypageHeader>작성한 모집글</MypageHeader>
      <Myjointitle>
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
      </Myjoinpost>
    </MypageWrapper>
  );
}
