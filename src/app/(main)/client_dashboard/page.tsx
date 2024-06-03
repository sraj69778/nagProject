"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Messages from "../page-components/Messages";
import Requests from "../page-components/Requests";
import ContentTile from "../page-components/content-tile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Dashboard = () => {
  const router = useRouter();
  // if (!sessionStorage.getItem("userData")) {
  //   router.push("/login");
  // }

  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements-requests"],
    queryFn: () =>
      axios.get(`http://3.6.132.27/api/requirements/${userData.user.email}`),
  });

  const contents = [
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
  ];
  if (data) {
    return (
      <>
        <div className="w-[80%]">
          <div className="m-[1rem] ml-0 py-[1.8%] px-[2%] h-[48vh] rounded-xl bg-[#fff] ">
            <div className="flex items-center justify-between mb-[0.3rem]">
              <h2 className="text-[#717171] text-[28px] font-bold">
                Dashboard
              </h2>
              <Image
                onClick={() => router.push("/post_requirement")}
                className="cursor-pointer"
                src={"/dashboard-vendor/add.svg"}
                width={35}
                height={100}
                alt="Project Logo"
              ></Image>
            </div>
            <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
            <div className="flex flex-col h-[90%] w-[100%]">
              <div className="flex flex-col flex-wrap w-[100%] h-[90%] m-0">
                {data?.data?.response?.requirements.map((content: any) => {
                  if (content?.isAccepted === false) {
                    return <></>;
                  } else {
                    return <ContentTile content={content} />;
                  }
                })}
              </div>
              <div className="h-[10%] flex items-center justify-center m-0">
                <Button className="flex justify-center items-center">
                  <p className="font-bold text-gray-500">Load More</p>
                  <img
                    src={"/dashboard-vendor/downarrow.svg"}
                    className="w-4 h-4 ml-2"
                  ></img>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* <Messages /> */}
            <Requests content={data} />
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
