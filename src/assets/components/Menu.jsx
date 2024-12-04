import React from "react";
import { FaCity } from "react-icons/fa";
import { FaTruckPlane } from "react-icons/fa6";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { BsLuggage } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const Menu = () => {
  return (
    <>
      <div className="flex justify-center p-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <FaCity />
          </div>
          <div>Pemberitahuan</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <FaTruckPlane />
          </div>
          <div>Transportasi</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <IoDocumentAttachSharp />
          </div>
          <div>Dokumen</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <BsLuggage />
          </div>
          <div>Komoditi</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <IoMdPerson />
          </div>
          <div>Layanan</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
