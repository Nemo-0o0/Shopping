import { Card } from 'antd';
import './CardComponent.scss';
import { StarOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/logo.jpg';

const CardComponent = () => {
    return (
        <div>
            <Card
                hoverable
                styles={{ body: { padding: '10px' } }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <img className="card-img" src={Logo} />
                <div className="style-name">Iphone</div>
                <div className="evaluate">
                    <span>
                        <span>4.0</span>
                        <StarOutlined className="icon" />
                    </span>
                    <span> | Buy 1000+</span>
                </div>
                <div className="price">
                    100.000.000
                    <span className="discount">-5%</span>
                </div>
            </Card>
        </div>
    );
};

export default CardComponent;
