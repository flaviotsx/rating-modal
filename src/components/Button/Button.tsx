import { StyledNav } from './Button.styles';
import Text from '../Text/Text';

export interface ButtonProps {
  children: React.ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  color: string,
  className?: string,
}

const Button: React.FC<Partial<ButtonProps>> = ({ children, onClick, color }) => (
  <StyledNav onClick={onClick} color={color}>
    <Text type='p' color='lightSolid' fontWeight='bold'>{children}</Text>
  </StyledNav>
);

export default Button;
