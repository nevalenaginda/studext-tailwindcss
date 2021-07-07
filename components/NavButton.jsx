import React from "react";

function NavButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-block lg:hidden w-8 h-8 text-gray-600 p-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="hover:text-blue-100"
        viewBox="0 0 20 20"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
    </button>
  );
}

export default NavButton;
