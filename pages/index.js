import Head from "next/head";
import NavBar from "../components/NavBar";
import ContentWrapper from "../components/ContentWrapper";
import ContentTittle from "../components/ContentTittle";
import HorizontalScroll from "react-scroll-horizontal";
import Stories from "../components/Stories";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <div className="font-quicksand min-h-screen">
      <Head>
        <title>Studext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="pt-24">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-screen lg:w-8/12 h-full">
            <Stories />
            <Statistics />
          </div>
          <div className="w-screen lg:w-4/12 h-full">
            <div className="mx-10 lg:mr-10 lg:ml-0 lg:mt-12 shadow-content rounded-3xl h-full">
              <h1>Leaderboard</h1>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen">
          <div className="m-10  shadow-content rounded-3xl min-h-full">
            <h1>Course</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
