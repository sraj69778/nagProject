"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContentTile from "../page-components/content-tile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = () => {
  const router = useRouter();
  if (!sessionStorage.getItem("userData")) {
    router.push("/login");
  }

  // Fetching data from session storage
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
  const { email, role } = userData.user;

  // Get Requst to get the ORG data from the server
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["first-data"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/user/${email}/${role}`)
        .then((res) => res.data),
  });

  const user_info = {
    image: "/display-picture/display.png",
    sector: "Manufacturing",
  };

  return (
    <>
      <div className="w-[80%]">
        <div className="m-[1rem] ml-0 py-[1%] px-[2%] h-[96vh] rounded-xl bg-[#fff] ">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[28px] font-bold">Profile</h2>
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
          <div className="flex flex-row h-[30%] mt-8 items-center">
            <div className="rounded-full mx-4 h-[80%] w-[15%] relative">
              <Image
                src={user_info.image}
                alt="User Image"
                fill={true}
                objectFit="fill"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col mx-8 justify-around h-[50%]">
              <div className="font-bold text-[24px]">{data?.user?.name}</div>
              <div className="text-[14px]">{user_info.sector}</div>
              <div className="text-[14px]">{data?.user?.location}</div>
            </div>
          </div>
          <div className="mx-8">
            Company description
            <div>{data?.user?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
