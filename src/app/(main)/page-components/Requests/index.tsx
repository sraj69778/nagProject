import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const Requests = () => {
  return (
    <>
      <>
        <div className="m-[1rem] ml-0 mt-0 px-[1.5rem] py-[1rem] h-[43.5vh] rounded-xl w-[50%] bg-[#fff]">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[28px] font-bold">Requests</h2>
            <Image
              className="cursor-pointer"
              src={"/dashboard-vendor/expand.svg"}
              width={20}
              height={90}
              alt="Project Logo"
            ></Image>
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
        </div>
      </>
    </>
  );
};

export default Requests;
