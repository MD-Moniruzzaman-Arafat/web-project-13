import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import { dataLoad } from "../fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: dataLoad,
      },
    ],
  },
]);

export default router;
