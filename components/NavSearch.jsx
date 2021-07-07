import React from "react";

function NavSearch() {
  return (
    <div className="mx-5 md:mx-10 flex flex-row flex-grow w-16 items-center px-3 bg-black-5 rounded-full h-12 w-auto">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 m-5 flex-none text-blue-100"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.04795 11.1693C8.15468 11.6971 7.11271 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.11272 11.6971 8.15469 11.1693 9.04796L16.5459 14.4246C17.1317 15.0104 17.1317 15.9602 16.5459 16.5459C15.9602 17.1317 15.0104 17.1317 14.4246 16.5459L9.04795 11.1693ZM9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        />
      </svg>
      <input
        type="text"
        className="border-transparent outline-none bg-black-5 h-8 flex-grow w-5 text-black-60 text-sm leading-5 focus:text-blue-100 "
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
}

export default NavSearch;
