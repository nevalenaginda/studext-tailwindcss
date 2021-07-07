import Head from "next/head";
import NavBar from "../components/NavBar";
import Stories from "../components/Stories";
import Statistics from "../components/Statistics";
import Leadeboard from "../components/Leadeboard";
import PreviewCourse from "../components/PreviewCourse";

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
          <PreviewCourse />
        </div>
      </div>
    </div>
  );
}
