import Text from '../Text/Text';
import Input from '../Input/Input';
import { StyledTextInput } from './TextInput.styles';
import { TextInputProps } from './TextInput.types';

const TextInput: React.FC<Partial<TextInputProps>> = ({
  title = '',
  placeholder = '',
  width = 360,
  marginBottom = 10,
}) => (
  <StyledTextInput
    width={width}
    marginBottom={marginBottom}
  >
    <Text
      type='p'
      color='darkHigh'
    >
      {title}
    </Text>
    <Input 
      placeholder={placeholder}
    />
  </StyledTextInput>
)

export default TextInput
