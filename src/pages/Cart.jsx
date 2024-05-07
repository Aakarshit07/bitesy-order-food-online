import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuItemsList from "../components/MenuItemsList";
import { clearCart, } from "../slices/cartSlice.js";

function Cart() {

    const dispatch = useDispatch()
    let cartItemsValue = useSelector((store) => store.cart.items);
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    if(cartItemsValue.length === 0) {
        return (
            <div className="m-4 p-4 text-center mt-52 md:my-20">
                <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
                <p className="text-gray-500 my-4">You can go to home page to view more restaurants</p>
                <button className="my-4 p-2 rounded-md bg-orange-400 hover:bg-orange-600/85 text-white font-bold shadow-lgs"><Link to="/">SEE RESTAURANTS NEAR YOU</Link></button>
            </div>
        )
    }

    return (
        <div className="w-9/12 mx-auto mt-52 md:my-4 p-1 flex flex-col md:flex-row flex-wrap justify-between items-center relative">
            <div className="mb-4 w-3/4">
                <div className="p-4 rounded-md my-4 shadow-lg bg-gradient-to-r from-gray-200 to-gray-400">
                    <button className="p-2 rounded-md bg-gradient-to-r from-black to-gray-700 text-white font-bold shadow-lg"
                        onClick={handleClearCart}
                    >Clear Cart</button>
                </div>
                <div className="">
                    <MenuItemsList data={cartItemsValue} />
                </div>
            </div>

            <div className="my-4">
                <div className="bg-white w-48 h-52 rounded-lg border-2 border-gray-400 shadow-lg">
                    <div className="flex p-2 gap-1">
                        <div className="">
                        <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                        <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                        <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="mt-4">
                            <p className="font-mono font-semibold my-1">Total Cart Item: {cartItemsValue.length}</p>
                            <p className="font-mono font-semibold my-1">Final Amount: {cartItemsValue.reduce((total, item) => total + (item.card.info.price || item.card.info.defaultPrice) * item.quantity, 0) / 100} </p>
                        </div>
                        <div className="mt-4">
                            <button
                                className="relative w-full h-10 border-2 my-6 border-green-500 border-collapse text-black font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                                onClick={handleClearCart}
                            >
                            <Link to="/thankyou">Proceed to Checkout!</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;