import { FC } from "react";
import Slider from "../components/slider";
import VisualMenu from "../components/VisualMenu";
import classes from "./index.module.css";

const Index: FC = () => {
  return (
    <div className={classes.container}>
      <Slider />
      <VisualMenu />
    </div>
  );
};

export default Index;
