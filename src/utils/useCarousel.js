import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

function useRestaurantCardData() {
    const [carouselData, setRestaurantData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(RESTAURANT_LIST_URL, {
                });
                const jsonData = await data.json();
                const actualData = await JSON.parse(jsonData.contents);
                console.log("actualData: ", actualData);
                const carousel = actualData?.data?.cards[0]?.card?.card
                setRestaurantData(carousel);
            } catch (error) {
                console.log("Failed to Fetch Restaurant List", error);   
            }
        }
        fetchData();
        
        return () => {};
    }, []);

    
    return carouselData;
}   

export default useRestaurantCardData;