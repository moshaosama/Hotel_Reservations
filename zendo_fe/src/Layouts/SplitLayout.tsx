import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import DropDownHistoryProvider from "../Context/DropDownHistoryContext";

const SplitLayout = () => {
  return (
    <>
      <DropDownHistoryProvider>
        <Navbar />
      </DropDownHistoryProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default SplitLayout;
