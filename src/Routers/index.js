import HomePage from '../pages/HomePage/HomePage';
import ProductsPage from '../pages/ProductPage/ProductsPage';
import OrderPage from '../pages/OderPage/OderPage'
import NotFounder from '../pages/NotFounder/NotFounder';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFounder,
    }
];
