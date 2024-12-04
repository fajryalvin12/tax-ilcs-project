import React from "react";
import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 bg-blue-900 h-12 text-white">
        <div>Logo</div>
        <div className="flex gap-2 items-center">
          <div>Senin, 22 Jul 2024</div>
          <div>
            <FaRegBell />
          </div>
          <div>Icon2</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
