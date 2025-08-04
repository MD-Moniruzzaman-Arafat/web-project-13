import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./routes/Routes.jsx";
import JobDetailsContextProvider from "./context/JobDetailsContextProvider.jsx";
import AppliedJobContextProvider from "./context/AppliedJobContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppliedJobContextProvider>
      <JobDetailsContextProvider>
        <RouterProvider router={router} />
      </JobDetailsContextProvider>
    </AppliedJobContextProvider>
  </StrictMode>
);
