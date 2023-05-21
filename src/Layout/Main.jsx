import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";
import Head from "../HeadTitle/Head";

const Main = () => {
  return (
    <div>
      <Head title="home" />
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
