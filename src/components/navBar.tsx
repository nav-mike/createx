import { FC } from "react";
import classes from "./navBar.module.css";
import create from "../assets/create.png";
import x from "../assets/x.png";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  BsSearch,
} from "react-icons/all";

const NavBar: FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={create} alt="createX" className={classes.logo} />
        <img src={x} alt="createX" className={classes.logo} />
      </div>
      <div
        className={`${classes["center-menu-list"]} ${classes["space-evenly"]}`}
      >
        <NavLink to={"/"} className={classes["menu-item"]}>
          Women
        </NavLink>
        <NavLink to={"/"} className={classes["menu-item"]}>
          Men
        </NavLink>
        <NavLink to={"/"} className={classes["menu-item"]}>
          Girls
        </NavLink>
        <NavLink to={"/"} className={classes["menu-item"]}>
          Boys
        </NavLink>
        <NavLink to={"/"} className={`${classes["menu-item"]} ${classes.red}`}>
          Sale
        </NavLink>
      </div>
      <div
        className={`${classes["center-menu-list"]} ${classes["search-component"]}`}
      >
        <input
          type={"text"}
          placeholder={"Search for products..."}
          className={classes["search-input"]}
        />
        <BsSearch />
      </div>
      <div className={classes["center-menu-list"]}>
        <div
          className={`${classes["center-menu-list"]} ${classes["menu-item-small-padding"]} ${classes.divider}`}
        >
          <AiOutlineHeart className={classes["menu-item-small"]} />
          <span className={classes["menu-item-small"]}>2</span>
        </div>
        <div
          className={`${classes["center-menu-list"]} ${classes["menu-item-small"]}`}
        >
          <AiOutlineShoppingCart className={classes["menu-item-small"]} />
          <span className={`${classes["menu-item-small"]} ${classes.badge}`}>
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
