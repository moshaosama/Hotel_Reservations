import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import { RouterProvider } from "react-router-dom";
import SplitLayout from "../Layouts/SplitLayout";
import Hotels from "../Pages/Hotels";
import { withLoading } from "../Utils/WithLoading";
import FilterHotels from "../Pages/FilterHotels";
import Error from "../Components/Error";
import ProfileHotel from "../Pages/ProfileHotel";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const HomeLoader = withLoading(Home);
const HotelsLoader = withLoading(Hotels);
const FilterationHotels = withLoading(FilterHotels);

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <SplitLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomeLoader />,
        },
        {
          path: "/hotels",
          children: [
            {
              index: true,
              element: <HotelsLoader />,
            },
            {
              path: ":hotel_name",
              children: [
                {
                  index: true,
                  element: <FilterationHotels />,
                },
                {
                  path: ":hotel_id",
                  element: <ProfileHotel />,
                },
              ],
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router}></RouterProvider>;
};
export default Router;
