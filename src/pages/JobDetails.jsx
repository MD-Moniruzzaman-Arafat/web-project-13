import { AiOutlineDollar } from "react-icons/ai";
import PageBanner from "../components/pageBanner/PageBanner";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useContext } from "react";
import { JobDetailsContext } from "../context";

const JobDetails = () => {
  const { jobDetails } = useContext(JobDetailsContext);
  console.log(jobDetails);
  return (
    <>
      <PageBanner title={"Job Details"} />
      <div className="container mx-auto flex gap-5 my-20 min-h-screen">
        <div className="flex-2">
          <p className="mb-5">
            <span className="font-bold">Job Description:</span>{" "}
            {jobDetails?.job_description}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {jobDetails?.job_responsibility}
          </p>
          <p className="font-bold mb-5">Educational Requirements:</p>
          <p className="mb-5">{jobDetails?.educational_requirements}</p>
          <p className="font-bold mb-5">Experiences:</p>
          <p className="mb-5">{jobDetails?.experiences}</p>
        </div>
        <div className="flex-1 bg-base-200 p-5 rounded-lg">
          <div>
            <p className="font-bold border-b-1 border-[lightGray] pb-5">
              Job Details
            </p>
            <p className="mt-5 flex items-center gap-1">
              <AiOutlineDollar /> Salary :{jobDetails?.salary} (Per Month)
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineCalendarDateRange /> Job Title :{jobDetails?.job_title}
            </p>
          </div>

          <div>
            <p className="font-bold border-b-1 border-[lightGray] py-5 ">
              Contact Information
            </p>
            <p className="mt-5 mb-2 flex items-center gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <MdOutlinePhone /> Phone :
              </span>{" "}
              {jobDetails?.contact_information?.phone}
            </p>
            <p className="flex mb-2 items-center gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <MdMailOutline /> Email :
              </span>{" "}
              {jobDetails?.contact_information?.email}
            </p>
            <p className="flex items-start gap-1">
              <span className="flex gap-1 items-center">
                {" "}
                <IoLocationOutline /> Address
              </span>{" "}
              : {jobDetails?.contact_information?.address}
            </p>
          </div>
          <button className="mt-5 bg-[#7E90FE] btn w-full text-white">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
