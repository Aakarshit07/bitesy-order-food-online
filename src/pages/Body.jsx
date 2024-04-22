import RestaurantCard from "../components/RestaurantCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Carousel from "../components/Carousel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurantDataThunk } from "../slices/dataSlice.js";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector((state) => state.cardData.filteredRestaurants);
  
  useEffect(() => {
    dispatch(fetchRestaurantDataThunk());
  }, [dispatch])

  //Todo: Add shimmer effect
  if(onlineStatus === false) {
    return <h1>Looks like you&apos;r offline, Please check your internet connection.</h1>
  }

  return (
    <div className="mt-52 md:mt-20">
      <div className="flex justify-start items-center gap-4 m-4 px-10 py-4">
        <Carousel />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 m-4 p-4">
        {
          filteredRestaurants &&
          filteredRestaurants.map((card) => (
            <Link key={card.info.id} to={"/restaurants/" + card?.info?.id}>
              <RestaurantCard resData={card} />
            </Link>
          ))
        }  
      </div>
    </div>
  )
}
export default Body;
