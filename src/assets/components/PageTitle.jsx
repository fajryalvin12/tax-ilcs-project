import React from "react";
import { FaAngleLeft, FaHome } from "react-icons/fa";

const PageTitle = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 text-blue-900 font-semibold">
        <div>/Beranda/SSM QC</div>
        <div className="flex gap-4">
          <button className="flex gap-4 items-center">
            <div>
              <FaAngleLeft />
            </div>
            <div>Beranda Permohonan</div>
          </button>
          <button className="flex gap-4 items-center">
            <div>
              <FaHome />
            </div>
            <div>Beranda Menu</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
