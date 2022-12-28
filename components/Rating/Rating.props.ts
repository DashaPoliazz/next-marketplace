import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  maxRating: number;
  isEditable: boolean;
  onRatingChange?: (ratingToChange: number) => void;
}
