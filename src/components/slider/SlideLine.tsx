import { FC } from "react";
import classes from "./SlideLine.module.css";

const SlideLine: FC<{ index: number; current: number }> = ({
  index,
  current,
}) => {
  return (
    <div
      className={`${index === current ? classes.active : ""} ${
        classes.container
      }`}
    >
      0{index + 1}
    </div>
  );
};

export default SlideLine;
