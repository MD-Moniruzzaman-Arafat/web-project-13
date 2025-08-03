const SectionTitle = ({ title, description }) => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl mb-5">{title}</h1>
        <p className="text-[#757575]">{description}</p>
      </div>
    </>
  );
};

export default SectionTitle;
