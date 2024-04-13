import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

function useRestaurantCardData() {
    const [restautantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_LIST_URL);
            const jsonData = await data.json();
            const resultedList = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; 
            
            console.log("Fetched Restaurant List", resultedList);
            setRestaurantList(resultedList);
        } catch (error) {
            console.log("Failed to Fetch Restaurant List", error)   
        }
    }
    return restautantList;
}   

export default useRestaurantCardData;