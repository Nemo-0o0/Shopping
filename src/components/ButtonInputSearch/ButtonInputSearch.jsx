import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import './ButtonInputSearch.scss';

const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        textButton,
        variant,
        backgroundColorInput = '',
        backgroundColorButton = '',
        colorButton = '',
    } = props;
    console.log(props);
    return (
        <div className="BIS">
            <Input
                size={size}
                placeholder={placeholder}
                variant={variant}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <Button
                size={size}
                style={{ background: backgroundColorButton, variant: !variant && 'none' }}
                icon={<SearchOutlined color={colorButton} />}>
                <span style={{ color: colorButton }}>{textButton}</span>
            </Button>
        </div>
    );
};

export default ButtonInputSearch;
