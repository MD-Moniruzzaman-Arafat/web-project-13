import { CiLocationOn } from "react-icons/ci";
import image from "../../assets/logo/airbnb.png";
import { AiOutlineDollarCircle } from "react-icons/ai";

const FeaturedJobsCard = () => {
  return (
    <>
      <div className="border border-[#E8E8E8] rounded-sm p-10">
        <img src={image} alt="" />
        <h1 className="font-extrabold my-1">Technical Database Engineer</h1>
        <p className="text-[#757575] my-1">Google LLC</p>
        <div className="flex gap-3 items-center my-2">
          <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
            Remote
          </button>
          <button className="btn btn-outline border-[#7E90FE] text-[#7E90FE] text-xs px-8">
            Full Time
          </button>
        </div>
        <div className="text-[#757575] flex flex-col lg:flex-row lg:items-center gap-3 my-2">
          <span className="flex items-center gap-1">
            <CiLocationOn /> Dhaka, Bangladesh
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineDollarCircle /> Salary : 100K - 150K
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
