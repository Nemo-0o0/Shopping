import { Input } from 'antd';
import './InputComponent.scss';
import PropTypes from 'prop-types';

const InputComponent = ({ size, placeholder, variant, style, ...rests }) => {
    return (
        <div className="Input">
            <Input size={size} placeholder={placeholder} variant={variant} style={style} {...rests} />
        </div>
    );
};

InputComponent.propTypes = {
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    style: PropTypes.object,
};

export default InputComponent;
