import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./pages/AppLayout"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Product } from "./pages/Product"
import { About } from "./pages/About"
import { DProfile } from "./pages/DProfile"
import { AddProduct } from "./pages/AddProduct"
import { fetchClaimproducts, fetchProduct } from "./api/fetchTask"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
export function App(){

  const router=createBrowserRouter([{
    path:'/',
    element:<AppLayout/>,
    // loader:fetchClaimproducts,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:fetchClaimproducts
      },
       {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'product',
        element:<Product/>,
        loader:fetchProduct
      },
      {
        path:'profile',
        element:<DProfile/>,
        loader:fetchClaimproducts
      },
      {
        path:'addproduct',
        element:<AddProduct/>
      },
       {
        path:'/login',
        element:<Login/>
      },
      {
        path:'signup',
        element:<Signup/>
      }
    ]
  }])
  return <RouterProvider router={router}/>
}