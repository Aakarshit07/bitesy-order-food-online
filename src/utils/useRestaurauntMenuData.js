import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants.js";

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const data = await fetch("https://proxy.cors.sh/"+MENU_URL+resId, {
                    headers: {
                        "x-cors-api-key": import.meta.env.VITE_API_KEY
                    }   
               });
               const json = await data.json();
            // console.log("Hook of menu list",json?.data);
               setResInfo(json?.data);
            } catch (error) {   
                console.log("Error Fetching Data: ", error);
            }
        }
        fetchData();
        
        return () => {};
    }, [resId]);

    
    return resInfo;
}
export default useRestaurantMenu;
