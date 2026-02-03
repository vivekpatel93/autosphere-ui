import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import CarSlider from "../slider/CarSlider";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <CarSlider />
      <Footer />
    </>
  );
};

export default UserLayout;
