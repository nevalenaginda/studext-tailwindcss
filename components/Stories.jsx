import React from "react";
import ContentWrapper from "./ContentWrapper";
import ContentTittle from "./ContentTittle";
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";

function Stories() {
  return (
    <ContentWrapper className="mx-10 mt-12 h-40">
      <ContentTittle>Story</ContentTittle>
      <HorizontalScroll>
        <Story name="Nevalen" image="/stories/Ellipse 84-2.png" />
        <Story name="Aginda" image="/stories/Ellipse 84-1.png" />
        <Story name="Prasetyo Wisnu" image="/stories/Ellipse 84-3.png" />
        <Story name="Skylar" image="/stories/Ellipse 84.png" />
        <Story name="Nevalen" image="/stories/Ellipse 84-2.png" />
        <Story name="Aginda" image="/stories/Ellipse 84-1.png" />
        <Story name="Prasetyo" image="/stories/Ellipse 84-3.png" />
        <Story name="Skylar" image="/stories/Ellipse 84.png" />
        <Story name="Nevalen" image="/stories/Ellipse 84-2.png" />
        <Story name="Aginda" image="/stories/Ellipse 84-1.png" />
        <Story name="Prasetyo" image="/stories/Ellipse 84-3.png" />
        <Story name="Skylar" image="/stories/Ellipse 84.png" />
        <Story name="Nevalen" image="/stories/Ellipse 84-2.png" />
        <Story name="Aginda" image="/stories/Ellipse 84-1.png" />
        <Story name="Prasetyo Wisnu" image="/stories/Ellipse 84-3.png" />
        <Story name="Skylar" image="/stories/Ellipse 84.png" />
      </HorizontalScroll>
    </ContentWrapper>
  );
}

export default Stories;
