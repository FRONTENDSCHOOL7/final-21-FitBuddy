import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostProfile from '../../components/Post/PostProfile';
import { getMyProducts } from '../../api/productApi.jsx';
import { MypageHeader, MypageWrapper } from './StyledMypage.jsx';

export default function Mypagemywrite() {
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

  return (
    <MypageWrapper>
      <MypageHeader>내가 쓴 글</MypageHeader>
      <PostProfile />
      <PostProfile />
    </MypageWrapper>
  );
}
