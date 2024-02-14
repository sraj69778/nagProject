import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <>
      <div className="bg-[#181B1C] h-[100vh] flex">
        {/* Login Section */}
        <div className="w-[60%]">
          <Image
            src={"/Project_Logo.svg"}
            width={200}
            height={100}
            alt="Project Logo"
          ></Image>
          <div className="w-[50%] m-auto h-full">
            <div className="text-center my-[2rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Welcome Back!
              </h2>
              <p className="text-[#D9D9D9]">
                Login to elevate your B2B connections
              </p>
            </div>
          </div>
        </div>
        <Separator className="bg-[#505050]" orientation="vertical" />

        {/* Image Section */}
        <div className="py-[100px] w-[30%] mx-auto">
          <Image
            src={"/Login_filler.svg"}
            width={600}
            height={200}
            alt="Project Logo"
          ></Image>
          <p className="my-[2rem] text-[24px] text-[#D9D9D9]">
            "Thrive virtually with our B2B Video Call and Messaging App.
            Showcase, engage, and close deals from anywhere. Empower your
            business growth without in-person meetings."
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
