import { CDN_URL } from "../utils/constants.js";
import PropTypes from "prop-types";

const RestaurantCard = (props) => {
  const  { resData } = props;
  const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info || {};
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-80">
      <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img  className="h-40 w-full" src={CDN_URL+cloudinaryImageId} alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-ellipsis break-words line-clamp-1 overflow-hidden">
        {name}
        </h5>
        <p className="font-sans text-base font-light leading-relaxed text-inherit antialiased text-ellipsis break-words line-clamp-1 overflow-hidden">
          {cuisines.join(", ")}
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {costForTwo}
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {avgRating}
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {sla.slaString}
        </p>
      </div>
    </div>
  )
}

RestaurantCard.propTypes = {
  resData: PropTypes.object.isRequired,
}
export default RestaurantCard;