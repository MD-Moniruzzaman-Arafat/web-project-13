import axios from "axios";

export const dataLoad = async () => {
  const jobCategoryRes = await axios.get("/data/categories.json");

  return {
    jobCategory: jobCategoryRes.data,
  };
};
