import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";

const PageBanner = ({ title }) => {
  return (
    <>
      <div
        className="bg-no-repeat h-46  flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg1}) ,url(${bg2})`,
          backgroundPosition: `left,right`,
          backgroundSize: "294px",
        }}
      >
        <h1 className="font-extrabold">{title}</h1>
      </div>
    </>
  );
};

export default PageBanner;
