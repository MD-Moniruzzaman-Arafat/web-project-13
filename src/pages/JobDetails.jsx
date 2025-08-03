import { AiOutlineDollar } from "react-icons/ai";
import PageBanner from "../components/pageBanner/PageBanner";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
  return (
    <>
      <PageBanner title={"Job Details"} />
      <div className="container mx-auto flex gap-5 my-20 min-h-screen">
        <div className="flex-2">
          <p className="mb-5">
            <span className="font-bold">Job Description:</span> A UI/UX (User
            Interface/User Experience) designer is responsible for designing and
            creating engaging and effective interfaces for software and web
            applications. This includes designing the layout, visual design, and
            interactivity of the user interface.
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsibility:</span> Collaborating
            with cross-functional teams: UI/UX designers often work closely with
            other teams, including product management, engineering, and
            marketing, to ensure that the user interface is aligned with
            business and technical requirements. You will need to be able to
            effectively communicate your design ideas and gather feedback from
            other team members.
          </p>
          <p className="font-bold mb-5">Educational Requirements:</p>
          <p className="mb-5">
            Bachelor degree to complete any reputational university.
          </p>
          <p className="font-bold mb-5">Experiences:</p>
          <p className="mb-5">2-3 Years in this field.</p>
        </div>
        <div className="flex-1 bg-base-200 p-5 rounded-lg">
          <div>
            <p className="font-bold border-b-1 border-[lightGray] pb-5">
              Job Details
            </p>
            <p className="mt-5 flex items-center gap-1">
              <AiOutlineDollar /> Salary : 100K - 150K (Per Month)
            </p>
            <p className="flex items-center gap-1">
              <HiOutlineCalendarDateRange /> Job Title : Product Designer
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
              01750-00 00 00
            </p>
            <p className="flex mb-2 items-center gap-1">
              <span className="flex items-center gap-1">
                {" "}
                <MdMailOutline /> Email :
              </span>{" "}
              info@gmail.com
            </p>
            <p className="flex items-start gap-1">
              <span className="flex gap-1 items-center">
                {" "}
                <IoLocationOutline /> Address
              </span>{" "}
              : Dhanmondi 32, Sukrabad Dhaka, Bangladesh
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
