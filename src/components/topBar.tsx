import { FC } from "react";
import classes from "./topBar.module.css";
import { Link } from "react-router-dom";
import { FiUser, MdKeyboardArrowDown } from "react-icons/all";

const TopBar: FC = () => {
  return (
    <div className={classes.component}>
      <div>
        <p>
          Available 24/7 at <strong>(405) 555-0128</strong>
        </p>
      </div>
      <div className={classes["center-menu-list"]}>
        <Link to={"/"} className={classes["menu-item"]}>
          Delivery & returns
        </Link>
        <Link to={`/`} className={classes["menu-item"]}>
          Track order
        </Link>
        <Link to={`/`} className={classes["menu-item"]}>
          Blog
        </Link>
        <Link to={`/`} className={classes["menu-item"]}>
          Contacts
        </Link>
      </div>
      <div className={classes["center-menu-list"]}>
        <div
          className={`${classes["menu-item"]} ${classes["center-menu-list"]}`}
        >
          <span className={classes["menu-item-small"]}>🇺🇸</span>
          <span className={classes["menu-item-small"]}>
            Eng/$ <MdKeyboardArrowDown />
          </span>
        </div>
        <div className={classes["center-menu-list"]}>
          <FiUser className={classes["menu-item-small"]} />
          <Link to={`/`} className={classes["menu-item-small"]}>
            Log in
          </Link>
          /
          <Link to={`/`} className={classes["menu-item-small"]}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
