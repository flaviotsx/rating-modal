import styled from 'styled-components';
import { color, device } from 'styles';
import { RatingProps } from './Rating.types';

export const StyledTextInput = styled.div<Partial<RatingProps>>`
  width: ${(props) => props.width}px;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  @media ${device.medium} {
    width: 100%;
  }
`;

export const StarRating = styled.div<Partial<RatingProps>>`
  display: flex;
  justify-content: space-around;
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: orange;
  }
  .off {
    color: ${color.darkHigh};
  }
`;
