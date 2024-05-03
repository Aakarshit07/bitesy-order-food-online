import RestaurantCard from "../components/RestaurantCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Carousel from "../components/Carousel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurantDataThunk } from "../slices/dataSlice.js";
import Shimmer from "../components/Shimmer.jsx";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector((state) => state.cardData.filteredRestaurants);
  const loading = useSelector((state) => state.cardData.loading);


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
      <div className="flex flex-wrap items-center justify-center gap-12 p-4">
        { 
          loading ? <><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /></>  : 
          filteredRestaurants && filteredRestaurants.map((card) => (
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
