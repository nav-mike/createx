import { FC } from "react";
import { SliderItem } from "../../models/sliderItem";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

interface IItemProps {
  item: SliderItem;
}

const Item: FC<IItemProps> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.collection}>New Collection</div>
        <div className={classes.title}>{props.item.title}</div>
        <div className={classes.actions}>
          <Link to={"/"} className={classes["button-outfit"]}>
            Shop sale
          </Link>
          <Link to={"/"} className={classes.button}>
            Shop the {props.item.title}
          </Link>
        </div>
      </div>
      <LazyImage
        src={props.item.image}
        alt={props.item.title}
        className={classes.image}
      />
    </div>
  );
};

export default Item;
