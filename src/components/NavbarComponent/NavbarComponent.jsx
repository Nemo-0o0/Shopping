import { Checkbox, Rate } from 'antd';
import './Navbar.scss';
const NavbarComponent = () => {
    const onChange = () => {};
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    return <span key={index}>{option}</span>;
                });
            case 'checkbox':
                return (
                    <Checkbox.Group
                        className="checkbox-group"
                        style={{
                            width: '100%',
                        }}
                        onChange={onChange}>
                        {options.map((option, index) => (
                            <Checkbox key={index} value={option.value}>
                                {option.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                );
            case 'star':
                return options.map((option, index) => {
                    console.log('check', option);
                    return (
                        <div className="Navbar-star" key={index}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{`tu ${option} sao`}</span>
                        </div>
                    );
                });
            case 'price':
                return options.map((option, index) => {
                    return (
                        <div className="Navbar-price" key={index}>
                            <span>{option}</span>
                        </div>
                    );
                });
            default:
                return null;
        }
    };

    return (
        <div className="wrapper-navbar">
            <h4 className="navbar-h4">Label</h4>
            <div className="wrapper-content">{renderContent('text', ['Tủ lạnh', 'TV', 'Laptop'])}</div>
            <div className="wrapper-content">
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                ])}
            </div>
            <div className="wrapper-content">{renderContent('star', [3, 4, 5])}</div>
            <div className="wrapper-content">{renderContent('price', ['duoi 40', 'tren 90'])}</div>
        </div>
    );
};

export default NavbarComponent;
