import { FC } from "react";
import classes from "./BannerCard.module.css";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

interface IBannerCardProps {
  buttonLabel?: string;
  finishedAt?: string;
  image: string;
  link?: string;
  subtitle: string;
  title: string;
}

const BannerCard: FC<IBannerCardProps> = ({
  title,
  subtitle,
  image,
  link,
  children,
  buttonLabel,
  finishedAt,
}) => {
  return (
    <div className={classes.banner} style={{ backgroundImage: `url(${bg})` }}>
      <img className={classes.image} src={image} alt={title} />
      <div className={classes.subtitle}>{subtitle}</div>
      <div>{title}</div>
      {buttonLabel && <a href={link || "/"}>{buttonLabel}</a>}
      <div>{children}</div>
      {finishedAt && <div>{finishedAt}</div>}
    </div>
  );
};

export default BannerCard;
