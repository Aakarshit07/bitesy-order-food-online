import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

function useRestaurantCardData() {
    const [carouselData, setRestaurantData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("https://proxy.cors.sh/"+RESTAURANT_LIST_URL, {
                    headers: {
                        "x-cors-api-key": import.meta.env.VITE_API_KEY
                    }
                });
                const jsonData = await data.json();
                const carousel = jsonData?.data?.cards[0]?.card?.card
                console.log(carousel);

                setRestaurantData(carousel);
            } catch (error) {
                console.log("Failed to Fetch Restaurant List", error);   
            }
        }
        fetchData();
    }, []);

    
    return carouselData;
}   

export default useRestaurantCardData;