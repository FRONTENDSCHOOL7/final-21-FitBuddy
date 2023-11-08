import { StyledButton } from './style/StyledCategoryButton';

export default function CategoryButton({ placeholder, onChange, name, onClick }) {
  return (
    <StyledButton
      type='button'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      onClick={onClick}
    />
  );
}
