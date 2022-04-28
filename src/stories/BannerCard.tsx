import { FC } from "react";
import "./BannerCard.css";
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
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="subtitle">{subtitle}</div>
      <div>{title}</div>
      {buttonLabel && <Link to={link || "/"}>{buttonLabel}</Link>}
      <div>{children}</div>
      {finishedAt && <div>{finishedAt}</div>}
    </div>
  );
};

export default BannerCard;
