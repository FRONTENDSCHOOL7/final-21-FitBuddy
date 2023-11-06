import styled from 'styled-components';
export const MypageWrapper = styled.div`
  margin-top: 40px;
  width: 414px;
`;

export const MypageHeader = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-title);
  text-align: left;
  font-family: 'Pretendard-Medium';
  display: flex;
  justify-content: space-between;

  & > button {
    margin-top: 3px;
    margin-left: 10px;
  }
`;

export const ProfileIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: 'Pretendard-Medium';
  img {
    cursor: pointer;
  }
`;

export const ProfileImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Introduction = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard-Medium';
`;

export const TitleWithEdit = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-m);
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'Pretendard-Medium';
  img {
    cursor: pointer;
  }
  button {
    margin-left: 14px;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  border: 0.5px solid #fff;
  background: transparent;
  color: var(--color-secondary);
  padding: 8px;
  border-radius: 8px;
`;

export const SaveButton = styled.button`
  background: transparent;
  border: 0.5px solid #fff;
  color: white;
  box-shadow: none;
  border-radius: 50px;
  padding: 5px 10px;
  overflow: visible;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    background: #a6ff4d;
    border: 0.5px solid #a6ff4d;
    color: black;
  }
`;

export const Interests = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Posts = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageset = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const StyledInputFile = styled.input`
  padding: 6px 25px;
  border-radius: 4px;
  color: var(--color-secondary);
  cursor: pointer;
  display: none;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  color: var(--color-secondary);
  background-color: transparent;
  border-radius: 8px;
`;
