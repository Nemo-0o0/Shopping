import SliderComponent from '../../components/SliderComponent/SliderComponent';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import './HomePage.scss';
import Slider1 from '../../assets/img/Slider1.webp';
import Slider2 from '../../assets/img/Slider2.webp';
import Slider3 from '../../assets/img/Slider3.webp';

function HomePage() {
    const arr = ['TV', 'Tu Lanh', 'Laptop'];
    const images = [Slider1, Slider2, Slider3];
    return (
        <>
            <div className="home-page">
                <div className="type-product">
                    {arr.map((item) => {
                        return <TypeProduct key={item} name={item} />;
                    })}
                </div>
            </div>
            <div className="container">
                <SliderComponent arrImages={images} />
            </div>
        </>
    );
}

export default HomePage;
