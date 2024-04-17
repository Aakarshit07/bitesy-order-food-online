import { CDN_URL } from "../utils/constants";
import PropTypes from "prop-types";
import useCarousel from "../utils/useCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../utils/carousel.config";

function Carousel() {
    const { header, imageGridCards } = useCarousel();
    return (
        <div className="w-full m-auto p-4">
            <h2 className="font-bold text-2xl">{header?.title}</h2>
            <div className="slider-container">
                <Slider {...settings}>
                {imageGridCards &&
                    imageGridCards.info.map((card) => (
                    <div key={card.id} className="">
                        <div className="m-1">
                            <img 
                                className="h-44 w-40"
                                src={CDN_URL+card.imageId} 
                                alt="Image" 
                            />
                        </div>
                    </div>
                ))}
                </Slider>
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