import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
