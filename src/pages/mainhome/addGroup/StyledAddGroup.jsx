import styled from 'styled-components';
import UploadImg from '../../../assets/placeholder/Placeholder-img.svg';

export const StyledAddGroup = styled.div`
  color: gray;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg);
  height: 900px;
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 36px;
    margin-bottom: 38px;
    max-height: 400px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const StyleButtonL = styled.div`
  position: absolute;
  bottom: 10px;
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
  overflowy: auto;
  backgroundcolor: #fff;
  boxshadow: 0 0 10px rgba(0, 0, 0, 0.2);
  zindex: 1000;
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
