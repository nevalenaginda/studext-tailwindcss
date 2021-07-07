import React from "react";

function Course({ image, title }) {
  return (
    <div className="rounded-3xl shadow-content p-4 w-[320px] h-[190px] mx-3 my-2 relative">
      <div className="flex items-center">
        <div className="w-[95px] h-[95px] rounded-3xl flex items-center justify-center overflow-hidden">
          <img
            src={image}
            className="text-center"
            width="95px"
            height="95px"
            alt="course"
          />
        </div>

        <div className="flex flex-col ml-3">
          <h3 className="text-base font-bold ">{title}</h3>
          <div className="flex flex-row items-center pb-2 pt-1 space-x-1">
            {Array.from(Array(5).keys()).map((itm) => {
              return (
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 5.09334C11.4572 5.00105 11.5491 4.8723 11.5961 4.72515C11.6432 4.57799 11.6429 4.41981 11.5955 4.27278C11.5481 4.12575 11.4559 3.99725 11.3317 3.90529C11.2076 3.81333 11.0578 3.76253 10.9033 3.76001L7.90333 3.64668C7.88858 3.64566 7.87444 3.6404 7.86261 3.63152C7.85078 3.62265 7.84177 3.61055 7.83667 3.59668L6.8 0.796675C6.74791 0.654222 6.65331 0.531214 6.529 0.444307C6.40469 0.3574 6.25668 0.310791 6.105 0.310791C5.95332 0.310791 5.80531 0.3574 5.681 0.444307C5.55669 0.531214 5.46208 0.654222 5.41 0.796675L4.37667 3.60668C4.37156 3.62055 4.36255 3.63265 4.35072 3.64152C4.33889 3.6504 4.32475 3.65566 4.31 3.65668L1.31 3.77001C1.15554 3.77253 1.00573 3.82333 0.881598 3.91529C0.757463 4.00725 0.66522 4.13575 0.617804 4.28278C0.570387 4.42981 0.570174 4.58799 0.617195 4.73515C0.664216 4.8823 0.756113 5.01105 0.88 5.10334L3.23333 6.95334C3.24511 6.96261 3.25391 6.97513 3.25865 6.98935C3.26339 7.00357 3.26386 7.01886 3.26 7.03334L2.45 9.90334C2.40803 10.0495 2.41209 10.205 2.46165 10.3488C2.5112 10.4925 2.60383 10.6175 2.72695 10.7068C2.85006 10.796 2.99768 10.8452 3.14972 10.8475C3.30175 10.8499 3.45083 10.8054 3.57667 10.72L6.06333 9.05334C6.07558 9.04489 6.09011 9.04036 6.105 9.04036C6.11988 9.04036 6.13442 9.04489 6.14667 9.05334L8.63333 10.72C8.75747 10.8083 8.90601 10.8557 9.05833 10.8557C9.21065 10.8557 9.3592 10.8083 9.48333 10.72C9.60648 10.6316 9.6992 10.5072 9.74875 10.364C9.79829 10.2207 9.80222 10.0656 9.76 9.92001L8.94333 7.04001C8.939 7.02555 8.93924 7.01011 8.94402 6.99579C8.94879 6.98148 8.95786 6.96898 8.97 6.96001L11.3333 5.09334Z"
                    fill="#F7C200"
                  />
                </svg>
              );
            })}
            <span className="ml-1 text-xs text-black-100">({20})</span>
          </div>
          <div className="flex items-center text-black-100 mb-2">
            <img src="/Rectangle 367.svg" alt="course vendor" />
            <span className="ml-2 text-sm text-black-100 font-medium">
              By Course Hero
            </span>
          </div>
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
                fill="#ADADAD"
              />
              <path
                d="M9 16.5C9 16.5 16.5 16.5 16.5 14.5714C16.5 12.2571 12.8438 9.75 9 9.75C5.15625 9.75 1.5 12.2571 1.5 14.5714C1.5 16.5 9 16.5 9 16.5Z"
                fill="#ADADAD"
              />
            </svg>
            <span className="ml-2 text-base text-black-100 font-medium">
              203 Pelajar, 4 Guru
            </span>
          </div>
        </div>
      </div>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[25px] right-[25px] cursor-pointer"
      >
        <path
          d="M0.71001 11.3C1.10001 11.69 1.73001 11.69 2.12001 11.3L6.71001 6.71C7.10001 6.32 7.10001 5.69 6.71001 5.3L2.12001 0.71C1.73001 0.32 1.10001 0.32 0.710009 0.710001C0.320009 1.1 0.320009 1.73 0.710009 2.12L4.59001 6.01L0.71001 9.89C0.32001 10.28 0.33001 10.92 0.71001 11.3Z"
          fill="#008FFF"
        />
      </svg>
      <div>
        <p className="text-right line-through text-xs text-black-100 mt-3">
          RP. 2000.000
        </p>
        <div className="flex justify-between items-center  ">
          <div className="text-sm text-red-100 rounded-full bg-red-10  px-2">
            Mulai: <span className="ml-1 font-bold">17 Agustus 2020</span>{" "}
          </div>
          <div className="text-base font-bold text-tosca-100">
            Rp. 1.500.000
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
