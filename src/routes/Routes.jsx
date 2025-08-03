import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import { dataLoad } from "../fetchData";
import JobDetails from "../pages/JobDetails";

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
      {
        path: "/job-detail",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
