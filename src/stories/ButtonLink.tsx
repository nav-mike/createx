import { FC } from "react";
import { IconType } from "react-icons";
import "./ButtonLink.css";
import { Link } from "react-router-dom";

interface IButtonLinkProps {
  title: string;
  url: string;
  icon?: IconType;
}

const ButtonLink: FC<IButtonLinkProps> = ({ title, url, icon }) => {
  const Icon = icon;
  return (
    <Link to={url || "/"} className="button">
      {title} {Icon && <Icon />}
    </Link>
  );
};

export default ButtonLink;
