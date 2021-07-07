import React from "react";
import ContentWrapper from "./ContentWrapper";
import ContentTittle from "./ContentTittle";
import Chart from "./Chart";
function Statistics() {
  return (
    <ContentWrapper className="m-10 h-[280px]">
      <ContentTittle>Statistics</ContentTittle>
      <Chart />
    </ContentWrapper>
  );
}

export default Statistics;
