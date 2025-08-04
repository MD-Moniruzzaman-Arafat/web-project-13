import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const AppliedJobCard = ({ job }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-base-200 p-5 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src={job?.logo}
            alt=""
            className="bg-base-300 py-20 px-10 w-50"
          />
          <div>
            <h1 className="font-extrabold my-1">{job?.job_title}</h1>
            <p className="text-[#757575] my-1">{job?.company_name}</p>
            <div className="flex gap-3 items-center my-2">
              <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
                {job?.remote_or_onsite}
              </button>
              <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
                {job?.job_type}
              </button>
            </div>
            <div className="text-[#757575] flex flex-col lg:flex-row lg:items-center gap-3 my-2">
              <span className="flex items-center gap-1">
                <CiLocationOn /> {job?.location}
              </span>
              <span className="flex items-center gap-1">
                <AiOutlineDollarCircle /> Salary : {job?.salary}
              </span>
            </div>
          </div>
        </div>
        <button className="btn bg-[#7E90FE] text-white my-2">
          View Details
        </button>
      </div>
    </>
  );
};

export default AppliedJobCard;
