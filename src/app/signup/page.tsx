import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link";


const Login = () => {
  return (
    <>
      <div className="bg-[#181B1C] h-[100vh] flex">
        {/* Signup Section */}
        <div className="w-[60%]">
        <div className="flex items-center px-[1rem]">
            <Image
              src={"/Project_Logo.svg"}
              width={50}
              height={100}
              alt="Project Logo"
            ></Image>
            <p className="text-[#dbdbdb] text-[36px] font-bold mx-[0.5rem]">
              DISCUZ
            </p>
          </div>
          <div className="w-[70%] m-auto">
            <div className="text-center flex flex-col items-center my-[1rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Create your account
              </h2>
              <p className="text-[#D9D9D9] text-[24px] font-medium">
              Start 7 days free trial
              </p>
              <p className="text-[#D9D9D9]">
              Get your business listed and have multiple opportunities
              </p>
              <div className="flex w-full max-w-sm flex-col my-[5%]">
                <Label htmlFor="name" className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]">Company Name*</Label>
                <Input type="name" className="text-black bg-[#D9D9D9] rounded mb-[6%]"/>

                <Label htmlFor="email" className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]">Email Id*</Label>
                <Input type="email" className="text-black bg-[#D9D9D9] rounded mb-[6%]"/>

                <Label htmlFor="password" className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]">Password*</Label>
                <Input type="password" className="text-black bg-[#D9D9D9] rounded mb-[6%]"/>

                <Label htmlFor="confirm_password" className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]">Confirm Password*</Label>
                <Input type="password" className="text-black bg-[#D9D9D9] rounded mb-[6%]"/>
                
                <Button type="submit" className="text-white hover:bg-blue-600 bg-[#1A88E1] my-[6%] rounded">SIGN UP</Button>
                <div className="flex flex-row justify-center items-center">
                <p className="text-[#D9D9D9]">Already have an account?</p><Link href="/login" className="text-[#5cb4fd] text-decoration-line: underline text-[15px]  ml-[5px]"> Sign in</Link>
                </div>
               
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
