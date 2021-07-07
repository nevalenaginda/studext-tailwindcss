import React from "react";

function ContentWrapper({ className, children }) {
  const addClassName = className ? className : " ";
  return (
    <div className={`rounded-3xl shadow-content p-4 ${addClassName}`}>
      {children}
    </div>
  );
}

export default ContentWrapper;
