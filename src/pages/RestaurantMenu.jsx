import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Loading } from '../components/Shimmer.jsx';
import useRestaurantMenu from "../utils/useRestaurauntMenuData.js";
import RestaurantMenuCategory from '../components/RestaurantMenuCategory.jsx';


const ResraurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    
    const [showIndex, setShowIndex] = useState(0);
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Loading />;
    
    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => (
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));

    return  (
        <div className="flex flex-col items-center mt-52 md:m-12">
            <div className="m-4 p-2 shadow-lg rounded-md text-left bg-gradient-to-r from-gray-100 to-gray-200">
                <h1 className="text-3xl font-semibold text-gray-600/100">{name}</h1>
                <h3 className="text-md mt-2 text-gray-700">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            </div>
            <div className="w-8/12">
                {categories && categories.map((category, index) =>
                    <RestaurantMenuCategory
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        isMenuOpen={index === showIndex ? true : false }
                        setShowIndex={() => setShowIndex(index)}
                    />
                )}
            </div>
        </div>
    )
}

export default ResraurantMenu;