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
        .get(`http://3.6.132.27/api/user/${email}/${role}`)
        .then((res) => res.data),
  });

  return (
    <>
      <div className="w-[80%]">
        <div className="m-[1rem] ml-0 py-[1%] px-[2%] h-[96vh] rounded-xl bg-[#fff] ">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[28px] font-bold">Profile</h2>
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
          <div className="bg-[#3f3f3f] text-[#fff] flex flex-col h-[50%] w-[100%] p-8 mt-8 rounded-xl">
            <div className="flex flex-row h-[30%]   mt-4 items-center">
              <div className="rounded-full mx-4 h-[80%] w-[7%] relative">
                <Image
                  src={data?.user?.profileImageURL}
                  alt="User Image"
                  fill={true}
                  objectFit="fill"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col mx-8 justify-around h-[100%]">
                <div className="font-bold text-[24px]">{data?.user?.name}</div>
                <div className="flex flex-col flex-wrap justify-between  h-[50%]">
                  <div className="text-[14px] mr-4">
                    <b>Sector: </b> {data?.user?.sector?.toUpperCase()}
                  </div>
                  <div className="text-[14px] mr-4">
                    <b>Location: </b> {data?.user?.location}
                  </div>
                  <div className="text-[14px] mx-4">
                    <b>Email: </b> {data?.user?.email}
                  </div>
                  <div className="text-[14px] mx-4">
                    <b>Phn No.: </b>
                    {data?.user?.contact}
                  </div>
                </div>
              </div>
            </div>
            <Separator className="bg-[#d7d7d7] mx-auto h-[0.1rem] mt-4 text-center " />
            <div className="m-8">
              <p className="font-medium text-[20px]">Company Description</p>
              <p className="mt-2">{data?.user?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
