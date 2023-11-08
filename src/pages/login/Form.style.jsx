import styled from 'styled-components';

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

  .errorMessageWrap,
  .loginValid {
    color: #ff5b5b;
  }
  .loginValid {
    margin-top: 12px;
  }
`;

export const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 198px;
`;

export const LoginInputBox = styled.input`
  width: 340px;
  height: 43px;
  padding-left: 31px;
  border-radius: 30px;
  border: 1px solid var(--color-primary);
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  font-size: var(--font-size-btn);
  color: var(--color-secondary);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.hasInput ? 'var(--color-bg)' : 'var(--color-gray)')};
  }
  background-color: transparent;
`;
