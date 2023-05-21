import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import MyToys from "../Pages/MyToys/MyToys";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:"/registration",
            element:<Registration></Registration>
      
        },
        {
          path:"/addToy",
          element:<AddToy></AddToy>
        },
        {
          path:"/allToys",
          element:<AllToys></AllToys>,
        },
        {
          path:'/viewDetails/:id',
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://baby-car-server.vercel.app/allToy/${params.id}`)
        },
        {
          path:"/myToys",
          element:<MyToys></MyToys>
        },
        {
          path:"updateToy/:id",
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://baby-car-server.vercel.app/myToys/${params.id}`),
        },
        {
          path:"/blog",
          element:<Blogs></Blogs>
        }
       
       
      ]
    },
  ]);

  export default router;