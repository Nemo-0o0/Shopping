import { Col, Row } from 'antd';
import './Header.scss';
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import SearchHeader from '../SearchHeader/SearchHeader';

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
                    <SearchHeader
                        size="large"
                        variant="default"
                        textButton="Tìm kiếm"
                        placeholder="Input search text"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
