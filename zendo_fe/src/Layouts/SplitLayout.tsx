import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const SplitLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SplitLayout;
