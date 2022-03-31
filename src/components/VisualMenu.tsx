import { FC } from "react";
import classes from "./VisualMenu.module.css";
import kids from "../assets/kids.jpg";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import { Link } from "react-router-dom";

const VisualMenu: FC = () => {
  return (
    <div className={classes.container}>
      <Link to={"/"} className={classes["menu-item"]}>
        <img className={classes["menu-image"]} src={women} alt={"Women's"} />
        <span>Women's</span>
      </Link>
      <Link to={"/"} className={classes["menu-item"]}>
        <img className={classes["menu-image"]} src={men} alt={"Men's"} />
        <span>Men's</span>
      </Link>
      <Link to={"/"} className={classes["menu-item"]}>
        <img className={classes["menu-image"]} src={kids} alt={"Kids'"} />
        <span>Kids'</span>
      </Link>
    </div>
  );
};

export default VisualMenu;
