import React, { FC } from "react";
import Star from "./Star";

interface IRatingProps {
  value: number;
  className?: string;
}

const Rating: FC<IRatingProps> = ({ value = 0, className = "" }) => {
  return (
    <div className={className}>
      {Array(value >= 5 ? 5 : value)
        .fill(0)
        .map((_, index) => (
          <Star key={index} filled={true} />
        ))}
      {Array(value >= 5 ? 0 : 5 - value)
        .fill(0)
        .map((_, index) => (
          <Star key={index} filled={false} />
        ))}
    </div>
  );
};

export default Rating;
