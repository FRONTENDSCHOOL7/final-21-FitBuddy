import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Iconnext from '../../assets/icons/icon-next.svg';
import Card from '../../components/Card/Card.jsx';
import { getMyProducts } from '../../api/productApi.jsx';
import { Link } from 'react-router-dom';
import NavBottom from '../../components/Common/Nav/NavBottom';

const MypageWrapper = styled.div`
  padding: 20px;
  padding-bottom: 100px;
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
  gap: 13px;
  a {
    text-decoration: none; /* 링크의 밑줄을 제거합니다 */
  }
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

  if (myProduct.product) {
    const myJoinData = myProduct.product;
    processedData = myJoinData.map((product) => {
      const createdAt = new Date(product.createdAt);
      const formattedCreatedAt = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${createdAt.getDate().toString().padStart(2, '0')}`;
      console.log('가공데이터', product.id);
      return {
        createdAt: formattedCreatedAt,
        author: product.author.accountname,
        itemName: product.itemName,
        itemImage: product.itemImage,
        link: product.link,
        //보낼 때 링크에 인원수, 장소,
        price: product.price,
        id: product.id,
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
    <>
      <MypageWrapper>
        <MypageHeader>작성한 모집글</MypageHeader>
        {processedData
          .filter((item) => item.itemName === 'FitBuddy')
          .reduce((acc, curr) => {
            const index = acc.findIndex((item) => item.createdAt === curr.createdAt);
            if (index === -1) {
              acc.push({ createdAt: curr.createdAt, data: [curr] });
            } else {
              acc[index].data.push(curr);
            }
            return acc;
          }, [])
          .map((item) => (
            <div key={item.createdAt}>
              <Myjointitle>
                <p>{item.createdAt}</p>
              </Myjointitle>
              <Myjoinpost>
                {item.data.map((data, index) => {
                  let link = data.link;
                  let _id = data.id;

                  let contentData = link.split('\n');
                  const result = {};

                  for (let i = 1; i < contentData.length - 1; i++) {
                    const line = contentData[i].trim();
                    const [key, value] = line.split(':');
                    result[key.trim()] = value.trim().replace(/,+$/, '');
                  }

                  return (
                    <Link to={`/group/${_id}`} key={_id}>
                      <Card
                        key={data._id}
                        image={data.itemImage}
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
              </Myjoinpost>
            </div>
          ))}
      </MypageWrapper>
      <NavBottom />
    </>
  );
}
