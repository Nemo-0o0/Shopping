import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

// Sử dụng default parameters thay vì defaultProps
const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        variant,
        textButton,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgba(18, 19, 18, 0.41)',
        colorButton = '#fff',
    } = props;
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                variant={variant}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <ButtonComponent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !variant && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
};

ButtonInputSearch.propTypes = {
    size: PropTypes.oneOf(['large', 'middle', 'small', 'default']),
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    textButton: PropTypes.string,
    backgroundColorInput: PropTypes.string,
    backgroundColorButton: PropTypes.string,
    colorButton: PropTypes.string,
};

export default ButtonInputSearch;
