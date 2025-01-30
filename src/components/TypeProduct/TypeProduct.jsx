import PropTypes from 'prop-types';

const TypeProduct = ({ name }) => {
    return <div>{name}</div>;
};

TypeProduct.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TypeProduct;
