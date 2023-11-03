import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: none;
  color: gray;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-primary);
  }
  &::after {
    content: '>';
    margin-left: auto;
    color: gray;
    font-size: 20px;
  }
`;

export default function CategoryButton(props) {
  return (
    <StyledButton
      type='button'
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      onClick={props.onClick}
    />
  );
}
