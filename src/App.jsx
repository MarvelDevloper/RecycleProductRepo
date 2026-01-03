import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./pages/AppLayout"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Product } from "./pages/Product"
import { About } from "./pages/About"
import { Profile } from "./pages/Profile"
import { AddProduct } from "./pages/AddProduct"

export function App(){

  const router=createBrowserRouter([{
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
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
        element:<Product/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'addproduct',
        element:<AddProduct/>
      }
    ]
  }])
  return <RouterProvider router={router}/>
}