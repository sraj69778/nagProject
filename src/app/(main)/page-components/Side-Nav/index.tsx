"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  let options = [
    {
      name: "Dashboard",
      image: "/dashboard-vendor/dashboard.svg",
      isSelected: pathname.includes("dashboard"),
      url: `${userData?.user?.role.toLowerCase()}_dashboard`,
    },
    {
      name: "Chats",
      image: "/dashboard-vendor/chat.svg",
      isSelected: pathname.includes("chat"),
      url: "/chats",
    },
    {
      name: "Requests",
      image: "/dashboard-vendor/requests.svg",
      isSelected: pathname.includes("requests"),
      url: "/requests",
    },
    {
      name: "Profile",
      image: "/dashboard-vendor/profile.svg",
      isSelected: pathname.includes("profile"),
      url: "/profile",
    },
    {
      name: "Log Out",
      image: "/dashboard-vendor/dashboard.svg",
      url: `/login`,
    },
  ];
  return (
    <>
      {/* <div className="bg-[#fff] w-[18%] h-[96.5vh] m-[1%] rounded-3xl mr-[1%] py-[1%]"> */}
      <div className="bg-[#0d1117] w-[100vw] h-[80px]  py-[1%] ">
      </div>
      <div className=" absolute bg-[#0d1117] w-[18%] h-[100vh]  py-[1%] mt-[80px]">
        <div className="flex items-center justify-center">
          <div className="h-[30px] border-solid border-white border-2 p-[20%]">
            <i className="fa fa-angle-down text-neutral-50"> <span>Abhijeet Nag</span></i>
          </div>
          {/* <img
            src={"/Project_Logo.svg"}
            className="h-auto w-[15.5%]"
            alt="Project Logo"
          ></img>
          <h1 className="text-[#717171] lg:text-[28px] ml-[5%] md:text-[24px] font-bold">
            Discuz Pro
          </h1> */}

        </div>
        {/* <Separator className="bg-[#d7d7d7] w-[90%] mx-auto h-[0.2rem] text-center " /> */}
        {/* Side Nav Buttons */}
        <div>
          {options.map((option) => (
            <div
              onClick={() => {
                router.push(option.url);
                option.name == "Log Out"
                  ? sessionStorage.removeItem("userData")
                  : "";
              }}
              key={option.name}
              className={` ${
                option.isSelected
                  ? "bg-[#1A88E1] text-[#ffffff]"
                  : "text-[#676767]"
              }   shadow-lg cursor-pointer mx-[8%] my-[4%] p-[3%] rounded-2xl flex items-center`}
            >
              <Image
                src={option.image}
                width={30}
                height={100}
                alt={`${option.name} Logo`}
              ></Image>
              <Button className="lg:text-[16px] md:text-[12px] font-medium">
                {option.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
