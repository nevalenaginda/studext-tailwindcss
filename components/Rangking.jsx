import React from "react";

function Rangking({ no, name, point, score, className, avatar }) {
  const addClassName = className ? className : " ";
  return (
    <div
      className={`flex items-center h-30 my-3 p-3 rounded-xl cursor-pointer ${addClassName}`}
    >
      <div className="flex flex-none items-center justify-center rounded-full w-[18px] h-[18px] text-sm font-bold bg-white">
        {no}
      </div>
      <img
        className="ml-2 w-[35px] h-[35px] rounded-full "
        src={avatar}
        alt="avatar"
      />
      <p className="ml-2 truncate w-full  font-bold text-lg">{name}</p>
      <div className="flex justify-between">
        <div className=" rounded-full mx-1 bg-white p-1 font-bold text-sm text-tosca-100">
          {point[0]}
        </div>
        <div className=" rounded-full mx-1 bg-white p-1 font-bold text-sm text-red-100">
          {point[1]}
        </div>
        <div className=" rounded-full mx-1 bg-white p-1 font-bold text-sm text-black-100">
          {point[2]}
        </div>
      </div>
      <div className="text-lg font-bold mx-2">{score}</div>
    </div>
  );
}

export default Rangking;
