import styled from 'styled-components';
import { color as fontColor, device } from '../../styles';
import { StyledTextProps } from './Text.types';
import { fontType, weight } from './Text.utils';

export const StyledText = styled.p<Partial<StyledTextProps>>`
  ${({ type }) => fontType[type || 'p']};
  font-weight: ${({ fontWeight }) => weight[fontWeight || 'normal']};
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ color }) => fontColor[color || 'darkHigh']};
`;

export const Responsive = styled.div`
  @media ${device.small} {
    h1 {
      font-size: 40px;
      line-height: 44px;
    }
    h2 {
      font-size: 32px;
      line-height: 36px;
    }
    h3 {
      font-size: 24px;
      line-height: 28px;
    }
    h4 {
      font-size: 20px;
      line-height: 24px;
    }
    h5 {
      font-size: 18px;
      line-height: 22px;
    }
    h6 {
      line-height: 20px;
    }
    p {
      line-height: 24px;
    }
  }
`;
