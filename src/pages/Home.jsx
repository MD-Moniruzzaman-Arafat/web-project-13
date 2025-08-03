import FeaturedJobs from "../components/featuredJobs/FeaturedJobs";
import Hero from "../components/hero/Hero";
import JobCategoryList from "../components/jobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <>
      <Hero />
      <JobCategoryList />
      <FeaturedJobs />
      <div></div>
    </>
  );
};

export default Home;
