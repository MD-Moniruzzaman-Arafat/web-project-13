import { useContext } from "react";
import PageBanner from "../components/pageBanner/PageBanner";
import { AppliedJobContext } from "../context";
import AppliedJobCard from "../components/appliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
  const { appliedJob } = useContext(AppliedJobContext);

  return (
    <>
      <PageBanner title={"Applied Jobs"} />
      <div className="container mx-auto my-20 min-h-auto">
        {appliedJob.map((job) => (
          <AppliedJobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
