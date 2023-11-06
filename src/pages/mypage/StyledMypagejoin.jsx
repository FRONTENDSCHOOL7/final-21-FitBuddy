import styled from 'styled-components';

export const MypageWrapper = styled.div`
  padding: 20px;
  padding-bottom: 100px;
`;

export const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  margin-bottom: 50px;
  font-family: 'Pretendard-Medium';
`;

export const Myjointitle = styled.p`
  display: flex;
  align-items: left;
  font-family: 'Pretendard-Medium'; /* 글로벌 스타일 한 번에 */
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Myjoinpost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  a {
    text-decoration: none; /* 링크의 밑줄을 제거합니다 */
  }
`;
