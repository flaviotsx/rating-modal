import { StyledText, Responsive } from "./Text.styles";
import { TextProps } from "./Text.types";
import { sizeToHeading } from "./Text.utils";

const Text: React.FC<Partial<TextProps>> = ({ 
  children, 
  type = 'p',
  color = 'gray',
  fontWeight = 'normal'
}) => (
  <Responsive >
    <StyledText 
      as={sizeToHeading[type]}
      color={color}
      type={type}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  </Responsive>
)



export default Text;