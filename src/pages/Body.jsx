import RestaurantCard from "../components/RestaurantCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Carousel from "../components/Carousel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRestaurantDataThunk, filterAll, filterFastDelivery, filterPureVeg, filterTopRated } from "../slices/dataSlice.js";
import Shimmer from "../components/Shimmer.jsx";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector((state) => state.cardData.filteredRestaurants);
  const loading = useSelector((state) => state.cardData.loading);
  console.log("Filtered List",filteredRestaurants);
  
  const handleAllFilter = () => {
    console.log("Clicked");
    dispatch(filterAll())
  }
  
  const handleTopRatedFilter = () => {
    console.log("Clicked");
    dispatch(filterTopRated())
  }

  const handleFastDeliveryFilter = () => {
    console.log("Clicked");
    dispatch(filterFastDelivery())
  }
  
  const handleVegFilter = () => {
    console.log("Clicked");
    dispatch(filterPureVeg())
  }

  useEffect(() => { 
    dispatch(fetchRestaurantDataThunk());
    return () => {};
  }, [dispatch])


  if(onlineStatus === false) {
    return <h1>Looks like you&apos;r offline, Please check your internet connection.</h1>
  }

  return (
    <div className="mt-52 md:mt-20">
      <div className="flex justify-start items-center gap-4 m-4 px-10 py-4">
        <Carousel />
      </div>

      <div className="flex flex-col items-start gap-4 m-4 px-10 py-4 mt-4 mb-12">
        <h3 className="text-2xl font-bold mt-8 mb-14">
          Top restraunts around you
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAllFilter} 
            className="font-mono py-2 px-4 text-lg bg-black text-white rounded-md shadow-xl text-center"
          >
            ALL Restaurants
          </button>
          <button 
            onClick={handleTopRatedFilter}
            className="font-mono py-2 px-4 text-lg bg-black text-white rounded-md shadow-xl text-center"
          >
            Top Rated
          </button>
          <button 
            onClick={handleFastDeliveryFilter}
            className="hidden sm:block font-mono py-2 px-4 text-lg bg-black text-white rounded-md shadow-xl text-center"
          >
            FAST DELIVERY
          </button>
          <button 
            onClick={handleVegFilter}
            className="font-mono py-2 px-4 text-lg bg-black text-white rounded-md shadow-xl text-center"
          >
            PURE VEG
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-12 p-4">
        { 
          loading ? (
            <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            </>
          ) : (
            filteredRestaurants && filteredRestaurants.map((card) => (
            <Link key={card.info.id} to={"/restaurants/" + card?.info?.id}>
              <RestaurantCard resData={card} />
            </Link>
          )))
        }  
      </div>
    </div>
  )
}
export default Body;
