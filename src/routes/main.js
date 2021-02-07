import Home from '../components/Home';
import AboutUs from '../components/pages/AboutUs';
import Post from '../components/pages/Post';
import Product from '../components/ecommerce/Product';
import ProductDetails from '../components/ecommerce/ProductDetails';
export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/about-us',
        component: AboutUs
    },
    {
        path: '/product',
        component: Product
    }
    ,
    {
        path: '/product/:id',
        component: ProductDetails
    },
    {
        path: '/posts',
        component: Post,
    }
]