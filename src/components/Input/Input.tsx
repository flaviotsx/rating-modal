import { InputProps } from './Input.types';
import { StyledInput } from './Input.styles';

const Input: React.FC<Partial<InputProps>> = ({ placeholder }) => (
  <StyledInput placeholder={placeholder} />
)



export default Input;
