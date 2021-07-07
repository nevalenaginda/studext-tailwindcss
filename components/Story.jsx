import React from "react";

function Story({ name, image }) {
  return (
    <div className="h-[84px] w-[60px] mr-[16px]">
      <div className="cursor-pointer bg-blue-100 border-0 border-story flex items-center justify-center ">
        <img
          src={image}
          className="h-[55px] w-[55px] rounded-full border-white border-[2px] m-0"
        />
      </div>
      <div className="w-[60px] text-center truncate mt-[4px] text-xs leading-5 text-black-100">
        {name}
      </div>
    </div>
  );
}

export default Story;
