import TypeProduct from '../../components/TypeProduct/TypeProduct';
import './HomePage.scss';

function HomePage() {
    const arr = ['TV', 'Tu Lanh', 'Laptop'];
    return (
        <div className="home-page">
            <div className="type-product">
                {arr.map((item) => {
                    return <TypeProduct key={item} name={item} />;
                })}
            </div>
            HomePage
        </div>
    );
}

export default HomePage;
