import styled from 'styled-components';
import { color } from 'styles';
import { InputProps, TextAreaProps } from './TextArea.types';

export const StyledTextAreaContainer = styled.div<Partial<TextAreaProps>>`
  width: ${(props) => props.width}px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTextArea = styled.textarea<Partial<InputProps>>`
  border-radius: 10px;
  border: 1px solid ${color.darkMedium};
  height: 128px;
  width: 100%;
  padding: 15px;
  color: ${color.darkLow};
  font-family: Roboto;

  ::placeholder {
    color: ${color.darkMedium};
  }

  :focus {
    outline: none;
    border: 1px solid ${color.darkMedium};
  }

  :hover {
    border: 1px solid ${color.darkMedium};
  }
`;
