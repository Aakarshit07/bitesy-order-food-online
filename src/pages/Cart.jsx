import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuItemsList from "../components/MenuItemsList";
import { clearCart } from "../slices/cartSlice.js";

function Cart() {

    const dispatch = useDispatch()
    const cartItemsValue = useSelector((store) => store.cart.items);
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    if(cartItemsValue.length === 0) {
        return (
            <div className="m-4 p-4 text-center mt-52 md:my-20">
                <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
                <p className="text-gray-500 my-4">You can go to home page to view more restaurants</p>
                <button className="my-4 p-2 rounded-md bg-orange-400 text-white font-bold shadow-lgs"><Link to="/">SEE RESTAURANTS NEAR YOU</Link></button>
            </div>
        )
    }

    return (
        <div className="w-6/12 mx-auto mt-52 md:my-4">
            <div className="p-4 rounded-md my-4 shadow-lg bg-gradient-to-r from-gray-200 to-gray-400">
                <button className="p-2 rounded-md bg-gradient-to-r from-black to-gray-700 text-white font-bold shadow-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
            </div>
            <div className="">
                <MenuItemsList data={cartItemsValue} />
            </div>
        </div>
    )
}

export default Cart;