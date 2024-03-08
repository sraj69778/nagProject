import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Messages from "../page-components/Messages";
import Requests from "../page-components/Requests";
import ContentTile from "../page-components/content-tile";

const Dashboard = () => {
  return (
    <>
      <div className="w-[80%]">
        <div className="m-[1rem] ml-0 py-[1.8%] px-[2%] h-[48vh] rounded-xl bg-[#fff] ">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[28px] font-bold">Dashboard</h2>
            <Image
              className="cursor-pointer"
              src={"/dashboard-vendor/expand.svg"}
              width={20}
              height={100}
              alt="Project Logo"
            ></Image>
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
          <div className="flex">
            <div className="w-full mr-[1rem]">
              <ContentTile />
              <ContentTile />
              <ContentTile />
            </div>
            <div className="w-full">
              <ContentTile />
              <ContentTile />
              <ContentTile />
            </div>
          </div>
        </div>
        <div className="flex">
          <Messages />
          <Requests />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
