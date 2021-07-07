import React from "react";
import ContentTittle from "./ContentTittle";
import ContentWrapper from "./ContentWrapper";
import Rangking from "./Rangking";

function Leadeboard() {
  return (
    <ContentWrapper className="mx-10 lg:mr-10 lg:ml-0 lg:mt-12 leaderboard relative overflow-hidden">
      <ContentTittle>Peringkat</ContentTittle>
      <p className="text-sm text-bold-100 leading-5">
        Hasil akhir perolehan nilai try out
      </p>
      <button className="text-blue-100  font-bold flex items-center hover:underline mt-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10V10.75C1 11.3467 1.23705 11.919 1.65901 12.341C2.08097 12.7629 2.65326 13 3.25 13H10.75C11.3467 13 11.919 12.7629 12.341 12.341C12.7629 11.919 13 11.3467 13 10.75V10M10 7L7 10M7 10L4 7M7 10V1"
            stroke="#008FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-base ml-2">Unduh .CSV</span>
      </button>
      <img
        src="/throphy.png"
        className="absolute top-[15px] right-0"
        alt="trophy"
      />
      <div className="h-[360px] overflow-y-auto ranking">
        <Rangking
          no="1"
          name="Nevalen Aginda"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank1"
          avatar="/ranking/Ellipse 73-1.png"
        />
        <Rangking
          no="2"
          name="Abu Dzar"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank2"
          avatar="/ranking/Ellipse 73-2.png"
        />
        <Rangking
          no="3"
          name="Herza Parama Yudhanto"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank3"
          avatar="/ranking/Ellipse 73-3.png"
        />
        <Rangking
          no="4"
          name="Maudy Fevilian"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank4"
          avatar="/ranking/Ellipse 73-4.png"
        />
        <Rangking
          no="5"
          name="Maudy Fevilian"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank4"
          avatar="/ranking/Ellipse 73.png"
        />
        <Rangking
          no="6"
          name="Maudy Fevilian"
          avatar=""
          point={[40, 0, 0]}
          score="100"
          className="rank4"
          avatar="/ranking/Ellipse 73.png"
        />
      </div>
    </ContentWrapper>
  );
}

export default Leadeboard;
