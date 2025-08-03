import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";

const FeaturedJobsCard = ({ singleJob }) => {
  console.log(singleJob);
  return (
    <>
      <div className="border border-[#E8E8E8] rounded-sm p-10">
        <img src={singleJob?.logo} alt="" className="w-20 mb-5" />
        <h1 className="font-extrabold my-1">{singleJob?.job_title}</h1>
        <p className="text-[#757575] my-1">{singleJob?.company_name}</p>
        <div className="flex gap-3 items-center my-2">
          <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
            {singleJob?.remote_or_onsite}
          </button>
          <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
            {singleJob?.job_type}
          </button>
        </div>
        <div className="text-[#757575] flex flex-col lg:flex-row lg:items-center gap-3 my-2">
          <span className="flex items-center gap-1">
            <CiLocationOn /> {singleJob?.location}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineDollarCircle /> Salary : {singleJob?.salary}
          </span>
        </div>
        <button className="btn bg-[#7E90FE] text-white my-2">
          View Details
        </button>
      </div>
    </>
  );
};

export default FeaturedJobsCard;
