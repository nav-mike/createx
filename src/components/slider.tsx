import { FC, useCallback, useEffect, useState } from "react";
import classes from "./slider.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/all";
import { useAppSelector } from "../store/hooks";
import { fetchSliderData } from "../store/actions/slider";
import { useDispatch } from "react-redux";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider as CarouselSlider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "./slider/item";
import SlideLine from "./slider/SlideLine";

const Slider: FC = () => {
  const sliderItems = useAppSelector((state) => state.slider.items);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const sliderLength = sliderItems.length;

  const loadSliderData = useCallback(async () => {
    await dispatch(fetchSliderData());
  }, [dispatch]);

  useEffect(() => {
    loadSliderData();
  }, []);

  const nextSlideHandler = useCallback(() => {
    setIndex((prev) => {
      if (prev + 1 === sliderLength) {
        return 0;
      }
      return prev + 1;
    });
  }, [setIndex, sliderLength]);

  const previousSlideHandler = useCallback(() => {
    setIndex((prev) => {
      if (prev - 1 < 0) {
        return sliderLength - 1;
      }
      return prev - 1;
    });
  }, [setIndex, sliderLength]);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={65}
      totalSlides={sliderItems.length}
      visibleSlides={1}
      infinite={true}
    >
      <div className={classes.container}>
        <div className={classes.arrow}>
          <ButtonBack className={classes.button} onClick={previousSlideHandler}>
            <BsArrowLeft className={classes.icon} />
          </ButtonBack>
        </div>
        <div className={classes.slider}>
          <CarouselSlider>
            {sliderItems.map((item, i) => (
              <Slide index={i} key={item.id}>
                <Item item={item} />
              </Slide>
            ))}
          </CarouselSlider>
          <div className={classes["sliders-line"]}>
            {sliderItems.map((_, i) => (
              <SlideLine index={i} key={i} current={index} />
            ))}
          </div>
        </div>
        <div className={classes.arrow}>
          <ButtonNext className={classes.button} onClick={nextSlideHandler}>
            <BsArrowRight className={classes.icon} />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
};

export default Slider;
