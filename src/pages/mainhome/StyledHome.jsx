import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus.svg';

export const StyleHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(--color-bg);
  width: 414px;
  height: 900px;
  max-height: 800px;

  .titleIcon {
    max-width: 40%;
    max-height: 40%;
    margin-top: 34px;
    margin-bottom: 60px;
  }
`;
export const CategoryWrapper = styled.div`
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
export const StyleCards = styled.div`
  display: flex;
  min-width: 380px;
  flex-direction: column;
  gap: 13px;

  a {
    text-decoration: none; /* 링크의 밑줄을 제거합니다 */
  }
`;
export const StyleAddButton = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 30px;
  border: none;
  border-radius: 50%;
  background-color: var(--color-primary);
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translateX(250%);
  cursor: pointer;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateX(250%) scale(1.2);
  }
`;
