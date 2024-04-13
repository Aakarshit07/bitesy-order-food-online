import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";
import PropTypes from "prop-types";

function MenuItemsList ({data}) {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        console.log("Added Item to cart");
        dispatch(addItem(item));
    }

    return (
        <div className="">
            {data.map((item) => 
                <div key={item.card.info.id} className="border-2 border-neutral-200 rounded-lg m-4 p-4 flex justify-between items-center gap-2 shadow-md">
                    <div className="w-4/5 p-2">   
                        <div>
                            <h2 className="font-bold">{item.card.info.name}</h2>
                            <h3 className="font-semibold text-sm">₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</h3>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-3 text-ellipsis overflow-hidden text-wrap">{item.card.info.description}</p> 
                    </div>
                    <div className="w-1/5 flex flex-col items-center">
                        <img className="w-32 md:w-40 h-28  rounded-md shadow-lg" src={CDN_URL + item.card.info.imageId} alt="Dish Image" />
                        <div className="absolute">
                            <button 
                                className="rounded-lg p-1 py-2 w-16 md:w-24 md:p-2 cursor-pointer bg-green-600 hover:border-green-500 hover:border-2 hover:bg-white hover:text-green-600 text-white shadow-lg font-mono md:font-bold mt-20"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

MenuItemsList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MenuItemsList;