import React from "react";
import { useNavigate } from "react-router-dom";

const SelectMenu = () => {
  const navigate = useNavigate();

  async function clickHome() {
    navigate("/");
  }
  async function clickEntity() {
    navigate("/entity");
  }
  async function clickGain() {
    navigate("/gain");
  }
  return (
    <>
      <div className="flex gap-2">
        <button onClick={clickHome}>Data Utama</button>
        <button onClick={clickEntity}>Data Entitas</button>
        <button onClick={clickGain}>Data Pungutan</button>
      </div>
    </>
  );
};

export default SelectMenu;
