import axios from "axios";

export const dataLoad = async () => {
  const jobCategoryRes = await axios.get("/data/categories.json");
  const jobRes = await axios.get("/data/jobs.json");

  return {
    jobCategory: jobCategoryRes.data,
    job: jobRes.data,
  };
};
