/* eslint-disable no-unused-vars */
// import useOnlineStatus from "../utils/useOnlineStatus.js";
import { WifiOff, Wifi, Search, ShoppingCart, Menu } from "lucide-react";
import Logo from "../assets/bitesy.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(true);
  

  return (
    <header className="bg-neutral-100">
      <nav className="flex items-center justify-between h-20 px-12">
        <Link to="/"><img src={Logo} alt="Bitesy" className="w-28"/></Link>
        {isOpen && <div className={`absolute top-[80px] left-0 bg-neutral-100 w-full flex flex-col items-center gap-4 py-2 md:static md:flex-row md:items-center md:justify-between`}>
          
          <div className="flex flex-col items-center md:flex-row gap-4 sm:w-1/2">
            <div className="flex justify-between items-center bg-black/75 border-neutral-300 p-1 w-1/2 m-1 rounded-md shadow-xl">
              <input className="p-1 mr-2 w-full rounded-sm bg-transparent text-white placeholder:text-white outline-none border-r-2 rounded-r-none border-neutral-1000" type="text" id="" placeholder="Search" />
              <Search color="#ffffff" absoluteStrokeWidth className="mr-1"/>  
            </div>
            <div>
              <button className="font-mono text-lg w-14 h-[37px] bg-black text-white rounded-md shadow-xl text-center">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4">  
            <Link to="/cart" className="">
              <ShoppingCart color="#000000" size={33} absoluteStrokeWidth /> 
            </Link>      
            <button className="font-mono w-16 h-[37px] bg-black text-white rounded-md shadow-xl">
              Github
            </button>
          </div>
          
        </div>}

        <div className="md:hidden sm:block">
          <Menu size={28} color="#242424" onClick={() => setIsOpen(!isOpen)}/> 
        </div>
      </nav>
    </header>
  )
}

export default Header;
// flex justify-center items-center gap-2 p-2
// flex justify-center items-center w-1/2
//<h2>{onlineStatus ? <Wifi color="#000000" absoluteStrokeWidth /> : <WifiOff color="#000000" absoluteStrokeWidth />}</h2> 
// <Link to="/about">About U</Link>
// <Link to="/contact">Contact Us</Link>
//flex-row sm:flex-col justify-between items-start
{/* <ShoppingCart color="#000000" absoluteStrokeWidth /> */}



/**
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
 */ 