import { StyledButton } from './style/StyledCategoryButton';

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
