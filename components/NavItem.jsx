import React from "react";

function NavItem({ children, className, label }) {
  const addClassName = className ? className : "text-black-80";
  return (
    <div className="nav mx-15 flex flex-row cursor-pointer py-1">
      {children}
      <span className={`ml-2 text-sm font-bold leading-5  ${addClassName} `}>
        {label}
      </span>
    </div>
  );
}

export default NavItem;
