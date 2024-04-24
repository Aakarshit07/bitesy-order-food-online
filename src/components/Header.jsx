import { WifiOff, Wifi, Search, ShoppingCart, Menu } from "lucide-react";
import Logo from "../assets/bitesy.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GIT_HUB } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { updateSearchTerm } from "../slices/dataSlice";


const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [isOpen, setIsOpen] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    dispatch(updateSearchTerm(searchText));
  }

  return (
    <header className="bg-gradient-to-r from-neutral-100 to-neutral-100 shadow-md">
      <nav className="flex items-center justify-between h-20 px-12">
        <Link to="/"><img src={Logo} alt="Bitesy" className="w-28"/></Link>
        {isOpen && <div className={`absolute top-[80px] left-0 bg-neutral-100 w-full flex flex-col items-center gap-4 py-2 md:static md:flex-row md:items-center md:justify-between`}>
          <div className="flex flex-col items-center md:flex-row gap-4 sm:w-1/2">
            <div className="flex justify-between items-center bg-black/75 border-neutral-300 p-1 w-1/2 m-1 rounded-md shadow-xl">
              <input 
                className="p-1 mr-2 w-full rounded-sm bg-transparent text-white placeholder:text-white outline-none rounded-r-none border-neutral-1000" 
                type="text" 
                placeholder="Search" 
                onChange={handleSearch}
              />
              <Search color="#ffffff" absoluteStrokeWidth className="mr-1"/>  
            </div>
            <div className="flex justify-between items-center gap-4 my-2">
              <div>
                <button className="font-mono text-lg w-14 h-[37px] bg-black text-white rounded-md shadow-xl text-center">
                  <Link to="/">Home</Link>
                </button>
              </div>
              <div>
                {onlineStatus === true ? <Wifi color="#000000" size={30} absoluteStrokeWidth /> : <WifiOff color="#000000" size={28} absoluteStrokeWidth />}
              </div>
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
                </p>: ""
              }
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