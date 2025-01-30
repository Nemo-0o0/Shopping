import { Button } from 'antd';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rests }) => {
    return (
        <div className="Button">
            <Button size={size} style={styleButton} {...rests}>
                <span style={styleTextButton}>{textButton}</span>
            </Button>
        </div>
    );
};

ButtonComponent.propTypes = {
    size: PropTypes.oneOf(['large', 'middle', 'small']).isRequired,
    styleButton: PropTypes.object,
    styleTextButton: PropTypes.object,
    textButton: PropTypes.string.isRequired,
};

export default ButtonComponent;
