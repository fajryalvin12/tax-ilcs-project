import React from "react";
import { Link } from "react-router-dom";

const SelectMenu = () => {
  return (
    <>
      <div className="flex gap-2">
        <button>
          <Link to={"/"}>Data Utama</Link>
        </button>
        <button>
          <Link to={"entity"}>Data Entitas</Link>
        </button>
        <button>
          <Link to={"gain"}>Data Pungutan</Link>
        </button>
      </div>
    </>
  );
};

export default SelectMenu;
