import React, { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

interface IStarProps {
  filled?: boolean;
}

const Star: FC<IStarProps> = ({ filled = false }) => {
  const size = "10px";

  return filled ? (
    <AiFillStar size={size} color="#f89828" />
  ) : (
    <AiOutlineStar size={size} color="#ccc" />
  );
};

export default Star;
