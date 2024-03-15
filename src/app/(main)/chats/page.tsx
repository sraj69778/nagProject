import { Separator } from "@/components/ui/separator";

const Messages = () => {
  const Chats = [{
    name:'Dency',
    message: 'Hello World!',
    profile: '/display-picture/display.png',
  },
  {
    name:'Dency',
    message: 'Hello World!',
    profile: '/display-picture/display.png',
  },
  {
    name:'Dency',
    message: 'Hello World!',
    profile: '/display-picture/display.png',
  },
  ]
  return (
    <>
    
    <div className="bg-[#fff] w-[58%] h-[96.5vh] my-[1%] rounded-3xl py-[1%]">
      <div className="flex items-center justify-start mx-[4%] h-[6%]">
            <h1 className="text-[#717171] lg:text-[20px] md:text-[16px] font-medium">
              Ayush Kamboj
            </h1>
        </div>
        <Separator className="bg-[#d7d7d7] w-[95%] mx-auto h-[0.2rem] text-center " />
    </div>
    <div className="bg-[#fff] w-[20%] h-[96.5vh] m-[1%] rounded-3xl py-[1%]">
      <div className="flex items-center justify-start mx-[4%] h-[6%]">
        <h1 className="text-[#717171] lg:text-[20px] md:text-[16px] font-bold">
          Chats
        </h1>
        <div className="w-[100%] flex flex-col">

        </div>
          {Chats.map((chat)=>{
            return <div>
              
            </div>
          })}
      </div>
          <Separator className="bg-[#d7d7d7] w-[95%] mx-auto h-[0.2rem] text-center " />
    </div>
  </>
  );
};

export default Messages;
