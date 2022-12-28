import cN from "classnames";
import { useMemo, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from "./starIcon.svg";
import styles from "./Rating.module.css";

const Rating = ({ rating, maxRating, isEditable }: RatingProps) => {
  const [currentRating, setCurrentRating] = useState(0);

  const ratingElements = useMemo(
    () => new Array(maxRating).fill(<></>),
    [maxRating]
  );

  const handleMouseEnter = (idxToSet: number) => {
    if (isEditable) {
      setCurrentRating(idxToSet + 1);
    }

    return;
  };

  return (
    <div>
      {ratingElements.map((_, idx) => (
        <StarIcon
          key={idx}
          className={cN(styles.star, {
            [styles.filled]: idx < currentRating,
          })}
          onMouseEnter={(e) => handleMouseEnter(idx)}
          onMouseLeave={(e) => setCurrentRating(rating)}
        />
      ))}
    </div>
  );
};

export default Rating;
