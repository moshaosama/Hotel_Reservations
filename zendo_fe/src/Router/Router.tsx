import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import { RouterProvider } from "react-router-dom";
import SplitLayout from "../Layouts/SplitLayout";
import Hotels from "../Pages/Hotels";
import { withLoading } from "../Utils/WithLoading";

const HomeLoader = withLoading(Home);
const HotelsLoader = withLoading(Hotels);

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <SplitLayout />,
      children: [
        {
          index: true,
          element: <HomeLoader />,
        },
        {
          path: "/hotels",
          element: <HotelsLoader />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Router}></RouterProvider>;
};
export default Router;
