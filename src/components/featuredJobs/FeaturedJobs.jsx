import SectionTitle from "../sectionTitle/SectionTitle";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
  return (
    <>
      <div className="container mx-auto my-20">
        <SectionTitle
          title={"Featured Jobs"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FeaturedJobsCard />
          <FeaturedJobsCard />
          <FeaturedJobsCard />
          <FeaturedJobsCard />
        </div>
        <div className="text-center">
          <button className="btn bg-[#7E90FE] text-white mt-5 px-8">
            See All Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
