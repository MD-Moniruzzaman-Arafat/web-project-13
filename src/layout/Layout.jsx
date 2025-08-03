import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
