import Text from '../Text/Text';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { RatingProps } from './Rating.types';
import { StarRating, StyledTextInput } from './Rating.styles';


const Rating: React.FC<Partial<RatingProps>> = ({
  title = '',
  width = 360,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <StyledTextInput
      width={width}
    >
      <Text
        type='p'
        color='darkHigh'
      >
        {title}
      </Text>
      <StarRating>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <FontAwesomeIcon className="star" size="2x" icon={faStar} />
            </button>
          );
        })}
      </StarRating>
    </StyledTextInput>
  )
}

export default Rating;
