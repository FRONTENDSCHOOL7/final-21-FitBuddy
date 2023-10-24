import styled, { keyframes } from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  img.logoImg {
    margin-top: 138px;
    margin-bottom: 100px;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 198px;
`;
