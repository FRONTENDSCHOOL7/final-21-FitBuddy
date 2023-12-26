import styled from 'styled-components';
import UploadImg from '../../../assets/placeholder/Placeholder-img.svg';

export const StyledAddGroup = styled.div`
  color: gray;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  background-color: var(--color-bg);
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;

  .inputs {
    display: flex;
    min-width: 360px;
    min-height: 500px;
    flex-direction: column;
    gap: 17px;
    margin-top: 20px;
    margin-bottom: 38px;
    max-height: 400px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  margin-bottom: 32px;
  height: 1px;
`;

export const ProgressBar = styled.div`
  width: ${({ step }) => (step / 3) * 100}%;
  background-color: #a6ff4d;
  height: 100%;
`;
export const StyledInputName = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const StyledInputRequireName = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  &::after {
    content: '*';
    color: #a6ff4d;
    margin-left: 4px;
  }
`;

export const StyleCompleteButton = styled.div`
  margin-top: auto;
`;
export const StyledTwoInputs = styled.div`
  display: flex;
  gap: 15px;

  /* img {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 52%;
    bottom: 20%;
  } */
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0%;
  }
  p {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0%;
    color: #fff;
  }
`;
export const InputPersonnel = styled.input`
  display: flex;
  width: 60%;
  align-items: center;
  text-align: center;
  background-color: #141414;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  &::placeholder {
    color: #fff;
  }
`;
export const CounterInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 46px;
  padding: 9px 45px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 43px;
`;
export const InputCreaseButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  background-color: #141414;
  color: #fff;
  border: none;
`;
export const StyleButtonL = styled.div`
  position: absolute;
  bottom: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  .categoryflex {
    display: flex;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // 여기를 변경하여 배경색을 검은색으로 설정
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  },
};
export const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80%',
  overflowY: 'auto',
  backgroundColor: '#FFF',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

export const ImageBtn = styled.button`
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  background-color: var(--color-gray);
  background-image: url(${UploadImg});
  background-repeat: no-repeat;
  background-size: 100px;
  position: absolute;
  background-size: cover;
  bottom: 10px;
  right: 10px;
`;

export const StyledKakaoMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 624px;
  position: absolute;
  background-color: #fff;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-family: 'Pretendard';

  .header {
    display: flex;
    padding: 22px 0px 15px 0px;
    align-items: center;
    margin-left: auto;
    h1 {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: #141414;
    }
    .closeButton {
      font-family: 'Pretendard';
      background-color: inherit;
      border: none;
      color: gray;
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-left: 88px;
      margin-right: 16px;
    }
  }

  #map {
    width: 378px;
    height: 380px;
  }
  .locationSearch {
    font-family: 'Pretendard';
    width: 312px;
    height: 39px;
    padding: 0px 0px 0px 31px;
    border-radius: 30px;
    border: 1px solid #141414;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
  }
  .searchBox {
    margin-top: 21px;
    gap: 11px;
    display: flex;
    align-items: center;
  }
  .searchIcon {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .searchList {
    display: flex;
    width: 282px;
    max-height: 108px;
    overflow-y: auto;
    gap: 12px;
    flex-direction: column;
    margin: 10px auto 0px 29px;
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      cursor: pointer;
    }
  }
`;
