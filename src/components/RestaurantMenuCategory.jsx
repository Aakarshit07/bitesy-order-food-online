import PropTypes from 'prop-types';
import { ChevronUp, ChevronDown } from 'lucide-react';
import MenuItemsList from './MenuItemsList';

function RestaurantMenuCategory({data, isMenuOpen, setShowIndex}) {
    const handleOnClick = () => {
        setShowIndex();
    }

    return (
        <div className="my-4 rounded-md">
            <div className="bg-gradient-to-r from-gray-100 to-gray-300 shadow-md flex justify-between p-4 rounded" onClick={handleOnClick}>
                <h3 className='font-bold'>{data.title} ({data.itemCards.length})</h3>
                { isMenuOpen 
                    ? <ChevronDown className='hidden md:block' />
                    : <ChevronUp className='hidden md:block' />
                }
            </div>
            <div>
                {isMenuOpen && <MenuItemsList data={data.itemCards}/>}
            </div>
        </div>
    )
}

RestaurantMenuCategory.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        itemCards: PropTypes.array.isRequired
    }).isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    setShowIndex: PropTypes.func.isRequired
};

export default RestaurantMenuCategory;
