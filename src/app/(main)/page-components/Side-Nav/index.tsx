import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
var options = [
  {
    name : 'Home',
    image: '/dashboard-vendor/home.svg',
    isSelected: false,

 },
 {
  name : 'Dashboard',
  image: '/dashboard-vendor/dashboard.svg',
  isSelected: false,

},
{
  name : 'Settings',
  image: '/dashboard-vendor/settings.svg',
  isSelected: true,

},
{
  name : 'Chats',
  image: '/dashboard-vendor/chat.svg',
  isSelected: false,

},
{
  name : 'Requests',
  image: '/dashboard-vendor/requests.svg',
  isSelected: false,

},
{
  name : 'Profile',
  image: '/dashboard-vendor/profile.svg',
  isSelected: false,

},
]
const SideNav = () => {
  return (
    <>
      <div className="bg-[#fff] w-[18%] h-[96.5vh] m-[1%] rounded-3xl mr-[1%] py-[1%]">
        <div className="flex items-center justify-center">
          <img
            src={"/Project_Logo.svg"}
            className="h-auto w-[15.5%]"
            alt="Project Logo"
          ></img>
          <h1 className="text-[#717171] lg:text-[28px] ml-[5%] md:text-[24px] font-bold">
            Discuz Pro
          </h1>
        </div>
        <Separator className="bg-[#d7d7d7] w-[90%] mx-auto h-[0.2rem] text-center " />
        {/* Side Nav Buttons */}
        <div>
          {options.map((option)=>(
             <div key = {option.name} className={` ${option.isSelected? 'bg-[#1A88E1] text-[#ffffff]':'text-[#676767]'}   shadow-lg cursor-pointer mx-[8%] my-[4%] p-[3%] rounded-2xl flex items-center`}>
             <Image
               src={option.image}
               width={30}
               height={100}
               alt={`${option.name} Logo`}
             ></Image>
             <Button className="lg:text-[16px] md:text-[12px] font-medium">{option.name}</Button>
           </div>
          ))}
         
          
        </div>
      </div>
    </>
  );
};

export default SideNav;
