import { FC, useCallback, useEffect, useState } from "react";
import classes from "./NewArrivals.module.css";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { fetchNewArrivals } from "../store/actions/newArrivals";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/all";
import Rating from "../stories/Rating";

const NewArrivals: FC = () => {
  const products = useAppSelector((state) => state.newArrivals.items);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const loadData = useCallback(async () => {
    await dispatch(fetchNewArrivals());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, []);

  const chunkSize = 6;
  const chunks = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    chunks.push(products.slice(i, i + chunkSize));
  }

  return (
    <div className={classes.container}>
      <h2>New Arrivals</h2>
      <p className={classes["sub-header"]}>
        Check out our latest arrivals for the upcoming season
      </p>
      <Link to={"/"} className={classes["collection-link"]}>
        See the collection here
      </Link>
      <div className={classes.products}>
        {chunks.length > 0 &&
          chunks[index].map((item) => (
            <div className={classes.product} key={item.id}>
              <div className={classes.rating}>
                <Rating
                  className={classes["rating-item"]}
                  value={parseInt((item.rating || "0").toString())}
                />
              </div>
              <img
                className={classes["product-image"]}
                alt={item.name}
                src={item.imageUrl}
              />
              <div className={classes.favorite}>
                {item.isFavorite ? (
                  <AiFillHeart style={{ color: "red" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <div className={classes["product-name"]}>{item.name}</div>
              <div className={classes["product-price"]}>
                ${item.price / 100}
              </div>
            </div>
          ))}
      </div>
      <div className={classes.indexes}>
        {chunks.map((_, i) => (
          <div
            key={i}
            className={`${classes.index} ${
              i === index ? classes["active-index"] : ""
            }`}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
