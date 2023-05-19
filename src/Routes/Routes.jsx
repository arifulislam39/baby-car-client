import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
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
          element:<AllToys></AllToys>
        },
        {
          path:"/myToys",
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);

  export default router;