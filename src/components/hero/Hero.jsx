import user from "../../assets/images/user.png";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <img src={user} className="lg:max-w-[800px]" />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold  lg:text-6xl lg:font-extrabold ">
              One Step Closer To Your{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6 text-[#757575] ">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
