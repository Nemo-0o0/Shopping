import PropTypes from 'prop-types';
import HeaderComponent from '../HeaderComponents/HeaderComponents';

export const DefaultComponents = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    );
};

DefaultComponents.propTypes = {
    children: PropTypes.node.isRequired,
};
