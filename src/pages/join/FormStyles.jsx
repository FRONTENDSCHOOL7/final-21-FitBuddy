import styled, { css } from 'styled-components';
import ButtonL from '../../components/Common/Buttons/ButtonL';

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

export const TextButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
`;

export const ImgContainer = styled.div`
  margin-top: 138px;
  margin-bottom: 100px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 132px;
`;

export const StyledButtonL = styled(ButtonL)`
  margin-bottom: 40px;
  cursor: pointer;
`;

export const StyledTextButton = styled(TextButton)`
  margin-top: 50px;
  margin-bottom: 35px;
  color: var(--color-gray);
`;

export const LoginInputBox = styled.input`
  width: 340px;
  height: 43px;
  padding-left: 31px;
  border-radius: 30px;
  border: 1px solid var(--color-primary);
  margin-bottom: ${(props) => `${props.marginBottom}px`};
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

export const ErrorMessage = styled.p`
  max-width: 340px;
  ${({ theme }) => css`
    margin-top: 0.6rem;
    /* margin-left: 20px; */
    color: var(--color-error);
    font-size: 16px;
  `}
  &.password-msg {
    margin: -2.4rem 0 3rem;
  }
`;
