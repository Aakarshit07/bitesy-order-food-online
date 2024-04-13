import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants.js";

function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
           const data = await fetch(MENU_URL + resId);
           const json = await data.json();
        //    console.log("Hook of menu list",json?.data);
           setResInfo(json?.data);
        } catch (error) {   
            console.log("Error Fetching Data: ", error);
        }
    }
    return resInfo;
}
export default useRestaurantMenu;
