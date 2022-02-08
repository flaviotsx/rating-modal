import styled from 'styled-components';
import { color } from '../../styles';
import { InputProps } from './Input.types';

export const StyledInput = styled.input<Partial<InputProps>>`
  border-radius: 10px;
  border: 1px solid ${color.darkMedium};
  height: 40px;
  width: 100%;
  padding-left: 15px;
  color: ${color.darkLow};

  ::placeholder {
    color: ${color.darkMedium};
  }

  :focus {
    outline: none;
    border: 1px solid ${color.darkHigh};
  }

  :hover {
    border: 1px solid ${color.darkHigh};
  }
`;
