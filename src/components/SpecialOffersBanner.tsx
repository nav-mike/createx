import { FC, useCallback, useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { fetchSpecialOffers } from "../store/actions/specialOffers";

const SpecialOffersBanner: FC = () => {
  const offers = useAppSelector((state) => state.specialOffers.items);
  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    await dispatch(fetchSpecialOffers());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, []);

  console.log(offers);

  return <div>!</div>;
};

export default SpecialOffersBanner;
