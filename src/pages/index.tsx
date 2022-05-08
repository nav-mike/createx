import { FC } from "react";
import Slider from "../components/slider";
import VisualMenu from "../components/VisualMenu";
import classes from "./index.module.css";
import NewArrivals from "../components/NewArrivals";
import SpecialOffersBanner from "../components/SpecialOffersBanner";

const Index: FC = () => {
  return (
    <div className={classes.container}>
      <Slider />
      <VisualMenu />
      <NewArrivals />
      <SpecialOffersBanner />
    </div>
  );
};

export default Index;
