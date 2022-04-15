import React, { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

interface IStarProps {
  filled?: boolean;
}

const Star: FC<IStarProps> = ({ filled = false }) => {
  return filled ? (
    <AiFillStar color="#f89828" />
  ) : (
    <AiOutlineStar color="#ccc" />
  );
};

export default Star;
