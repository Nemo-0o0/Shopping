import PropTypes from 'prop-types';
import { Image } from 'antd';
import Slider from 'react-slick';
const SliderComponent = ({ arrImages }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <Slider {...settings}>
            {arrImages.map((image, index) => (
                <div key={index}>
                    <Image src={image} alt="slider" preview={false} width="100%" height="274px" />
                </div>
            ))}
        </Slider>
    );
};

SliderComponent.propTypes = {
    arrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderComponent;
