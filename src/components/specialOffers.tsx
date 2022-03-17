import { FC } from "react";
import classes from "./specialOffers.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";
import { Link } from "react-router-dom";

const SpecialOffers: FC = () => {
  return (
    <div className={classes.container}>
      <AiOutlineLeft className={classes.icon} />
      <strong className={classes.text}>Up to 70% Off.</strong>
      <u className={classes.text}>
        <Link to={`/`}>Shop our latest sale styles</Link>
      </u>
      <AiOutlineRight className={classes.icon} />
    </div>
  );
};

export default SpecialOffers;
