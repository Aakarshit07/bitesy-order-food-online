import { CDN_URL } from "../utils/constants.js";
import PropTypes from "prop-types";

const RestaurantCard = (props) => {
  const  { resData } = props;
  const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info || {};
  return (
    <div className="w-72 h-96 rounded overflow-hidden shadow-lg">
      <img className="w-full h-44" src={CDN_URL+cloudinaryImageId} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-ellipsis break-words line-clamp-1 overflow-hidden">{name}</div>
        <p className="text-gray-700 text-base text-ellipsis break-words line-clamp-1 overflow-hidden">
          {cuisines.join(", ")}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{costForTwo}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{avgRating} &#9733;</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{sla.slaString}</span>
      </div>
    </div>
  )
}

RestaurantCard.propTypes = {
  resData: PropTypes.object.isRequired,
}
export default RestaurantCard;


// <div className="flex flex-col items-center w-60 rounded-lg p-2 bg-gray-100 h-80 cursor-pointer hover:bg-[#D6D9E0] border" >
// <div className="w-52">
//   <img  className="w-52 h-36 rounded-md" src={CDN_URL+cloudinaryImageId}/>
// </div>
// <div className="flex flex-col items-start p-2 w-52 text-ellipsis break-words line-clamp-2 overflow-hidden mt-1">
//   <h3 className="font-semibold">{name}</h3>
//   <h4>{costForTwo}</h4>
//   <h4>{avgRating} &#9733; {sla.slaString}</h4>
//   <h4 className=" text-gray-500/90 text-ellipsis break-words line-clamp-2 overflow-hidden">{cuisines.join(", ")}</h4>
// </div>
// </div>
{/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}
