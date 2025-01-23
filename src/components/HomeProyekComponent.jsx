import React from "react";

const HomeProyekComponent = ({ imageSrc, title, description }) => {
  return (
    <div className="box p-2 bg-white shadow">
      <img src={imageSrc} alt="Proyek Image" className="w-full h-[220px]" />
      <h3 className="text-xl font-bold  mt-6 mb-2">{title}</h3>
      <p className=" text-base/loose">{description}</p>
    </div>
  );
};

export default HomeProyekComponent;
