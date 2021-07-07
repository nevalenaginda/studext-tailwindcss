import React from "react";

function ContentTittle({ className, children }) {
  const addClassName = className ? className : " ";
  return (
    <h3
      className={`text-lg font-bold leading-6 text-black-100 mb-3 ${addClassName}`}
    >
      {children}
    </h3>
  );
}

export default ContentTittle;
