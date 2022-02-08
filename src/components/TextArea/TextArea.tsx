import { Text } from '..'
import { StyledTextArea, StyledTextAreaContainer } from './TextArea.styles'
import { TextAreaProps } from './TextArea.types';


const TextArea: React.FC<Partial<TextAreaProps>> = ({
  title = '',
  placeholder = '',
  width = 360,
}) => (
  <StyledTextAreaContainer
    width={width}
  >
    <Text
      type='p'
      color='darkHigh'
    >
      {title}
    </Text>
    <StyledTextArea 
      placeholder={placeholder}
    />
  </StyledTextAreaContainer>
)



export default TextArea;
