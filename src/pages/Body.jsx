import RestaurantCard from "../components/RestaurantCard.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantCardData from "../utils/useRestaurantCardData.js";
import Carousel from "../components/Carousel.jsx";
// import Shimmer from "./Shimmer.js";

const Body = () => {
  const restaurantList = useRestaurantCardData();
  const onlineStatus = useOnlineStatus();
  //Todo: Add shimmer effect


  if(onlineStatus === false) {
    return <h1>Looks like you&apos;r offline, Please check your internet connection.</h1>
  }

  return (
    <div className="mt-52">
      <div className="flex justify-start items-center gap-4 m-4 px-10 py-4">
        <Carousel />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 m-4 p-4">
        {
          restaurantList &&
          restaurantList.map((card) => (
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



/* 
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

<div className="flex justify-between items-center">
    <input 
      className="border-2 border-r-0 border-gray-400 rounded rounded-r-none px-2 py-1 outline-none"
      placeholder="Your favorite food here " 
      type="text" 
      value={searchText} 
      onChange={(e)=>{
        setSearchText(e.target.value);
      }}
    />
    <button 
      className="border-2 border-gray-400 rounded px-2 py-1 outline-none rounded-l-none text-gray-600 hover:text-white hover:bg-gray-400/95 font-semibold"
      onClick={()=> {
        const filterlist = restaurantList.filter(
          (item) => item.info.name.toLowerCase().includes(searchText.toLowerCase().trim()));
          console.log(filterlist);
        setFilteredRestaurantList(filterlist);
      }}
    >Search</button>
</div> 
*/