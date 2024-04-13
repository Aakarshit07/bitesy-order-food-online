/* eslint-disable no-unused-vars */
// import useOnlineStatus from "../utils/useOnlineStatus.js";
import { WifiOff, Wifi, Search, ShoppingCart } from "lucide-react";
import Logo from "../assets/bitesy.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <header className="flex justify-center items-center gap-6">
      <Link to="/"><img src={Logo} alt="Bitesy" className="w-24" /></Link>
      <div className="flex flex-row justify-between items-center border-2 py-1">
        <div className="p-1 bg-black m-1 rounded-full">
          <Search color="#ffffff" absoluteStrokeWidth />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-[25px] border-2 py-2">
        <div className=""> 
          {cartItems.length > 0 ? <div className="absolute bg-orange-600 rounded-full ml-6">
            <p className="font-semibold text-white p-1" >
            {cartItems.length < 10 ? "0" + cartItems.length : cartItems.length}
            </p>
          </div> : ""}
          <Link to="/cart" className="">
            <ShoppingCart color="#000000" size={30} absoluteStrokeWidth /> 
          </Link>
        </div>       
        <button className="font-semibold min-w-[70px] bg-black text-white rounded-md shadow-xl">
          Github
        </button>
      </div>
  </header>
  )
}

export default Header;

//<h2>{onlineStatus ? <Wifi color="#000000" absoluteStrokeWidth /> : <WifiOff color="#000000" absoluteStrokeWidth />}</h2> 
// <Link to="/about">About U</Link>
// <Link to="/contact">Contact Us</Link>
//flex-row sm:flex-col justify-between items-start
{/* <ShoppingCart color="#000000" absoluteStrokeWidth /> */}