import SectionTitle from "../sectionTitle/SectionTitle";
import JobCategoryCard from "./JobCategoryCard";
import { useLoaderData } from "react-router";

const JobCategoryList = () => {
  const { jobCategory } = useLoaderData();
  console.log(jobCategory);
  return (
    <>
      <div className="my-20 container mx-auto">
        <SectionTitle
          title={"Job Category List"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {jobCategory.map((category) => (
            <JobCategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCategoryList;
