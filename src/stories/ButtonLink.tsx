import { FC } from "react";
import { IconType } from "react-icons";
import "./ButtonLink.css";

interface IButtonLinkProps {
  title: string;
  url: string;
  icon?: IconType;
}

const ButtonLink: FC<IButtonLinkProps> = ({ title, url, icon }) => {
  const Icon = icon;
  return (
    <a href={url || "/"} className="button">
      {title} {Icon && <Icon />}
    </a>
  );
};

export default ButtonLink;
