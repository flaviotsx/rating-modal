import { StyledFooter } from './Footer.styles';

const Footer: React.FC = ({ 
  children, 
}) => (
  <StyledFooter>
    {children}
  </StyledFooter>
);

export default Footer;
