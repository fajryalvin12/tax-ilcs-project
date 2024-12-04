import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 bg-blue-900 h-12 text-white">
        <div>Logo</div>
        <div className="flex gap-2">
          <div>Senin, 22 Jul 2024</div>
          <div>Icon1</div>
          <div>Icon2</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
