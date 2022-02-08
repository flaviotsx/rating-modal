import styled from 'styled-components';
import { device } from 'styles';
import { TextInputProps } from './TextInput.types';

export const StyledTextInput = styled.div<Partial<TextInputProps>>`
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  width: ${(props) => props.width}px;
  @media ${device.medium} {
    width: 100%;
  }
`;
