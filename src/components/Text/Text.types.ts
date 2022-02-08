import { ColorType } from '../../styles';
import { weight, fontType } from './Text.utils';

export interface StyledTextProps {
  as?: React.ElementType;
  color: ColorType;
  fontWeight: WeightType;
  type: FontType;
}

export interface TextProps {
  type: FontType;
  color: ColorType;
  fontWeight: WeightType;
}

type WeightType = keyof typeof weight;
type FontType = keyof typeof fontType;
