import { useState } from "react";
import { JobDetailsContext } from ".";

const JobDetailsContextProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState({});
  return (
    <JobDetailsContext.Provider value={{ jobDetails, setJobDetails }}>
      {children}
    </JobDetailsContext.Provider>
  );
};

export default JobDetailsContextProvider;
