import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";

const Login = () => {
  return (
    <>
      <div className="bg-[#181B1C] h-[100vh] flex">
        {/* Login Section */}
        <div className="w-[60%]">
          <Logo />
          <div className="w-[50%] m-auto">
            <div className="text-center my-[2rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Welcome Back!
              </h2>
              <p className="text-[#D9D9D9]">
                Login to elevate your B2B connections
              </p>
            </div>

            {/* Form Section */}
            <div className="w-[65%] mx-auto">
              <div>
                <Label className="text-[#D9D9D9]" htmlFor="email">
                  Email*
                </Label>
                <Input className="bg-[#D9D9D9] mt-[5px] rounded" type="email" />
              </div>
              <div className="my-[1rem]">
                <Label className="text-[#D9D9D9]" htmlFor="email">
                  Password*
                </Label>
                <Input
                  className="bg-[#D9D9D9] mt-[5px] rounded"
                  type="password"
                />
              </div>
              <Button
                type="submit"
                className="py-[1.5rem] hover:bg-blue-600 font-bold text-[#ffffff] bg-[#1A88E1] w-full my-[6%] rounded"
              >
                LOGIN IN
              </Button>
              <p className="text-[#D9D9D9] text-center my-[0.5rem]">
                Forgot Password?
              </p>
              <div className="flex items-center justify-center">
                <p className="text-[#D9D9D9]">
                  Don't have an account?{" "}
                  <Link href={"/signup"}>
                    <span className="text-[#5cb4fd] ml-[5px] underline">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
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
