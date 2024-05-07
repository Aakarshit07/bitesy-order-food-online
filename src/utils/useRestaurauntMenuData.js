import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants.js";

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const data = await fetch(MENU_URL+resId);
               const jsonData = await data.json();
               const actualData = await JSON.parse(jsonData.contents);
               console.log("Menu: ", data);
               setResInfo(actualData?.data);
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
