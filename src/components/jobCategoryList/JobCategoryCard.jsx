const JobCategoryCard = ({ category }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] p-10 rounded-xl">
        <img
          src={category?.logo}
          alt=""
          className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-3 rounded-xl mb-5"
        />
        <h6 className="font-extrabold">{category?.category_name}</h6>
        <p className="text-xs text-[#A3A3A3]">{category?.availability}</p>
      </div>
    </>
  );
};

export default JobCategoryCard;
