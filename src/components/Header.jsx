// import useOnlineStatus from "../utils/useOnlineStatus.js";
import { WifiOff, Wifi, Search, ShoppingCart, Menu } from "lucide-react";
import Logo from "../assets/bitesy.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GIT_HUB } from "../utils/constants";

const Header = () => {
  // const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");

  const cartItems = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(true);
  

  return (
    <header className="bg-gradient-to-r from-neutral-100 to-neutral-100 shadow-md">
      <nav className="flex items-center justify-between h-20 px-12">
        <Link to="/"><img src={Logo} alt="Bitesy" className="w-28"/></Link>
        {isOpen && <div className={`absolute top-[80px] left-0 bg-neutral-100 w-full flex flex-col items-center gap-4 py-2 md:static md:flex-row md:items-center md:justify-between`}>
          <div className="flex flex-col items-center md:flex-row gap-4 sm:w-1/2">
            <div className="flex justify-between items-center bg-black/75 border-neutral-300 p-1 w-1/2 m-1 rounded-md shadow-xl">
              <input 
                className="p-1 mr-2 w-full rounded-sm bg-transparent text-white placeholder:text-white outline-none border-r-2 rounded-r-none border-neutral-1000" 
                type="text" 
                placeholder="Search" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Search color="#ffffff" absoluteStrokeWidth className="mr-1"/>  
            </div>
            <div>
              <button className="font-mono text-lg w-14 h-[37px] bg-black text-white rounded-md shadow-xl text-center">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4 ">  
            <div className=" relative p-1">
              <Link to="/cart" className="">
                <ShoppingCart color="#000000" size={30} absoluteStrokeWidth /> 
              </Link>
              {cartItems.length > 0 ?
                <p className="absolute top-0 right-1 bg-orange-600 rounded-full text-white font-mono">
                {cartItems.length < 10 ? "0" + cartItems.length : cartItems.length}
                </p>: ""}
            </div>      
            <div>
              <Link to={GIT_HUB} target="_blank">
                <button className="font-mono w-16 h-[37px] bg-black text-white rounded-md shadow-xl">
                  Github
                </button>
              </Link>
            </div>
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


// const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
// const [searchText, setSearchText] = useState("");

// <div className="flex justify-between items-center">
//   <input 
//     className="border-2 border-r-0 border-gray-400 rounded rounded-r-none px-2 py-1 outline-none"
//     placeholder="Your favorite food here " 
//     type="text" 
//     value={searchText} 
//     onChange={(e)=>{
//       setSearchText(e.target.value);
//     }}
//   />
//   <button 
//     className="border-2 border-gray-400 rounded px-2 py-1 outline-none rounded-l-none text-gray-600 hover:text-white hover:bg-gray-400/95 font-semibold"
//     onClick={()=> {
//       const filterlist = restaurantList.filter(
//         (item) => item.info.name.toLowerCase().includes(searchText.toLowerCase().trim()));
//         console.log(filterlist);
//       setFilteredRestaurantList(filterlist);
//     }}
//   >Search</button>
// </div> 













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