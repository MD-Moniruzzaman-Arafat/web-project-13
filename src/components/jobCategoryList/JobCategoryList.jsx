import SectionTitle from "../sectionTitle/SectionTitle";
import JobCategoryCard from "./JobCategoryCard";
import accountIcon from "../../assets/icons/accounts.png";
import creativeIcon from "../../assets/icons/creative.png";
import marketingIcon from "../../assets/icons/marketing.png";
import chipIcon from "../../assets/icons/chip.png";

const JobCategoryList = () => {
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
          <JobCategoryCard
            image={accountIcon}
            title={"Account & Finance"}
            description={"300 Jobs Available"}
          />
          <JobCategoryCard
            image={creativeIcon}
            title={"Creative Design"}
            description={"100+ Jobs Available"}
          />
          <JobCategoryCard
            image={marketingIcon}
            title={"Marketing & Sales"}
            description={"150 Jobs Available"}
          />
          <JobCategoryCard
            image={chipIcon}
            title={"Engineering Job"}
            description={"224 Jobs Available"}
          />
        </div>
      </div>
    </>
  );
};

export default JobCategoryList;
