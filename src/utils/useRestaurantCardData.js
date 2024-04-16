import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

function useRestaurantCardData() {
    const [restautantData, setRestaurantData] = useState({
        restaurantList: [],
        carouselData: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(RESTAURANT_LIST_URL);
                const jsonData = await data.json();
                console.log(jsonData);
                const carouselData = jsonData?.data?.cards[0]?.card?.card
                const restaurantList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                setRestaurantData({carouselData, restaurantList});
            } catch (error) {
                console.log("Failed to Fetch Restaurant List", error)   
            }
        }
        fetchData();
    }, []);

    
    return restautantData;
}   

export default useRestaurantCardData;