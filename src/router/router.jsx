import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Navigation from '../pages/navigation/Navigation';
import Menu from '../pages/menu/Menu';
import Cart from '../pages/cart/Cart';
import Status from '../pages/status/Status';
import CreateAccount from '../pages/createAccount/CreateAccount';
import LoginForm from '../pages/loginForm/LoginForm';
import OrderHistory from '../pages/orderHistory/OrderHistory';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/navigation',
        element: <Navigation />
    },
    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/status',
        element: <Status />
    },
    {
        path: '/create',
        element: <CreateAccount />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '/orders',
        element: <OrderHistory />
    }
]);

export default router;