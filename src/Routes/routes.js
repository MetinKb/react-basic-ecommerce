import { createBrowserRouter } from 'react-router-dom'
import WebLayout from 'Layouts/Web'
import Home from 'Pages/Home'
import About from 'Pages/About'
import Contact from 'Pages/Contact'
import Products from 'Pages/Products'
import ProductDetail from 'Pages/Products/ProductDetail'
import Error from 'Components/Error'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <Products />,
                children: [
                    {
                        path: ':category',
                        element: <Products />,
                    },
                    {
                        path: ':category/:id',
                        element: <ProductDetail />,
                    },
                ]
            }
        ]
    }
])
