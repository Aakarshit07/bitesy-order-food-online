import { useEffect, useState } from "react";

function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check for the online status
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        return () => {};
    }, [])

    //returns the boolean value.
    return onlineStatus;
}
export default useOnlineStatus;