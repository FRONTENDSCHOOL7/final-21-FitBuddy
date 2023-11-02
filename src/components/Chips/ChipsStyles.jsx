import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  padding: 15px 10px;
  margin-bottom: ${(props) => (props.marginBottom === '40px' ? '40px' : '')};
`;

/* Input */

const sharedInput = css`
  display: none;
`;

const sharedLabel = css`
  display: inline-block;
  cursor: pointer;
  height: 32px;
  min-width: 66px;
  width: auto;
  border: none;
  line-height: 32px;
  text-align: center;
  font-size: var(--font-size-sm);
  padding: 0px 10px;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  ${sharedInput}
  + label {
    ${sharedLabel}
    color: var(--color-secondary);
    border-radius: 16px;
    border: 1px solid var(--color-secondary);
    margin-right: 10px;
    margin-top: 14px;
  }

  &:checked + label {
    background-color: var(--color-primary);
    color: #000;
  }
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  ${sharedInput}

  + label {
    ${sharedLabel}
    font-weight:bold;
    background-color: transparent;
    color: #fff;
    border-radius: 16px;
    border: 1px solid #fff;
    margin-right: 10 px;
  }

  &:checked + label {
    background-color: var(--color-primary);
    color: #000;
  }
`;
export const Label = styled.label`
  width: fit-content;
  margin-right: 12px;
`;

/* onboarding */
export const CheckboxContainer = styled.div`
  display: flex;
  width: 350px;
  flex-wrap: ${(props) => (props.nowrap ? 'nowrap' : 'wrap')};
`;
export const OnboardTitle = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--color-secondary);
`;
