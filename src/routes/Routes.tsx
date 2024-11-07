import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from '../pages/products/Deshboard';
import Signup from '../pages/rgistration/Signup';
import Nav from '../components/Nav';
import Cart from '../pages/products/Cart';
import YourOrder from '../pages/products/YourOrder';
import NotFoundPage from '../pages/rgistration/NotFound';
function RoutesPage() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Nav/>,
            children: [
              {
                path: '/',
                element: <Dashboard />,
              },
            ],
          },
        {
            path: '/signup', element: <Signup />
            
        },
        {
            path:'/cart',element:<Nav/>,
            children: [
                {
                  path: '/cart',
                  element: <Cart />,
                },
              ],
        },
        {
            path:'/yourorder',element:<Nav/>,
            children: [
                {
                  path: '/yourorder',
                  element: <YourOrder />,
                },
              ],
        },
        { 
            path:"*", element:<NotFoundPage />
         }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default RoutesPage
