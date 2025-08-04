import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import { dataLoad } from "../fetchData";
import JobDetails from "../pages/JobDetails";
import AppliedJobs from "../pages/AppliedJobs";

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
      {
        path: "/applied-job",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default router;
