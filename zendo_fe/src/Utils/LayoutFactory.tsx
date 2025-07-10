import { Outlet, useLocation } from "react-router";
import DropDownHistoryProvider from "../Context/DropDownHistoryContext";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

const LayoutFactory = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? (
        <Outlet />
      ) : (
        <>
          <DropDownHistoryProvider>
            <Navbar />
          </DropDownHistoryProvider>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutFactory;
