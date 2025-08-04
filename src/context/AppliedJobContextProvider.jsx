import { useState } from "react";
import { AppliedJobContext } from ".";

const AppliedJobContextProvider = ({ children }) => {
  const [appliedJob, setAppliedJob] = useState([]);
  return (
    <AppliedJobContext.Provider value={{ appliedJob, setAppliedJob }}>
      {children}
    </AppliedJobContext.Provider>
  );
};

export default AppliedJobContextProvider;
