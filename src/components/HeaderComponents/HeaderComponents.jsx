import { Col, Row } from 'antd';
import './Header.scss';
import Search from 'antd/es/transfer/search';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

function HeaderComponents() {
    return (
        <div>
            <Row className="row" gutter={16}>
                {/* Logo */}
                <Col span={6}>
                    <span className="logo">SHOPPING</span>
                </Col>
                {/* Input */}
                <Col span={12}>
                    <Search placeholder="input search text" enterButton />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px' }}>
                    {/* Account */}
                    <div className="account">
                        <UserOutlined className="icon" />
                        <div>
                            <span>Login / SignIn</span>
                            <div>
                                <span>Account</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </div>
                    {/* Cart */}
                    <div className="cart">
                        <ShoppingCartOutlined className="icon" />
                        <span>Cart</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HeaderComponents;
