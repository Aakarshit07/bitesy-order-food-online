import { CDN_URL } from "../utils/constants";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Carousel({ carouselData }) {
    
    const { header, imageGridCards } = carouselData
    const { title } = header
    const { info } = imageGridCards 


    return (
        <div>
            <div className="border-2 border-lime-700 overflow-hidden relative m-2">
                <h2 className="font-bold text-2xl">{header && title}</h2>
                <div  className="flex justify-between items-center border-2 border-amber-500 gap-6 m-1">
                    {imageGridCards && 
                        info.map((card) => (
                            <img key = {card.id} className="w-32 border-2" src={CDN_URL+card.imageId} alt={card.accessibility.altText} />
                        ))  
                    }
                </div>
                <div className="absolute top-1.5 right-0 flex gap-2">
                    <ChevronLeft className="text-center bg-gray-300/70 rounded-full hover:bg-gray-400/50 " size={30} color="#2e2e2e" absoluteStrokeWidth />
                    <ChevronRight className="text-center bg-gray-300/70 rounded-full hover:bg-gray-400/50 " size={30} color="#2e2e2e" absoluteStrokeWidth />
                </div>
            </div>
        </div>
    )
}


Carousel.propTypes = {
    carouselData: PropTypes.shape({
        header: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        imageGridCards: PropTypes.shape({
            info: PropTypes.array.isRequired 
        }).isRequired
    })
}

export default Carousel;