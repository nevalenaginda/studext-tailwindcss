import Head from "next/head";
import NavBar from "../components/NavBar";
import ContentWrapper from "../components/ContentWrapper";
import ContentTittle from "../components/ContentTittle";
import HorizontalScroll from "react-scroll-horizontal";
import Stories from "../components/Stories";
import Statistics from "../components/Statistics";
import Leadeboard from "../components/Leadeboard";
import Course from "../components/Course";

export default function Home() {
  return (
    <div className="font-quicksand min-h-screen overflow-x-hidden">
      <Head>
        <title>Studext || Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="pt-24">
        <div className="flex flex-col lg:flex-row">
          <div className="w-screen lg:w-8/12">
            <Stories />
            <Statistics />
          </div>
          <div className="w-screen lg:w-4/12 h-full">
            <Leadeboard />
          </div>
        </div>
        <div className="w-screen">
          <ContentWrapper className="mx-10 mt-10 lg:mt-0 mb-10 h-[270px]">
            <ContentTittle>Course Preview</ContentTittle>
            <HorizontalScroll>
              <Course image="/course/Rectangle 356.svg" title="TOEFL" />
              <Course
                image="/course/Rectangle 356-1.svg"
                title="Desain Grafis"
              />
              <Course
                image="/course/Rectangle 356-2.svg"
                title="Desain Grafis"
              />
              <Course image="/course/Rectangle 356-3.svg" title="Piano" />
              <Course image="/course/Rectangle 356-4.svg" title="Gitar" />
              <div className="hover:underline text-blue-100 cursor-pointer flex items-center justify-center rounded-3xl shadow-content p-4 w-[320px] h-[190px] mx-3 my-2">
                <div className="flex flex-col leading-7 text-xl mr-5  ">
                  <span>View </span>
                  <span>More (999+)</span>
                </div>
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.71001 11.3C1.10001 11.69 1.73001 11.69 2.12001 11.3L6.71001 6.71C7.10001 6.32 7.10001 5.69 6.71001 5.3L2.12001 0.71C1.73001 0.32 1.10001 0.32 0.710009 0.710001C0.320009 1.1 0.320009 1.73 0.710009 2.12L4.59001 6.01L0.71001 9.89C0.32001 10.28 0.33001 10.92 0.71001 11.3Z"
                    fill="#008FFF"
                  />
                </svg>
              </div>
            </HorizontalScroll>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}
