import Image from "next/image";

const ContentTile = () => {
  return (
    <>
      <div className="bg-[#3f3f3f] w-[48%] my-[1rem] p-[1rem] text-[#fff] rounded-2xl flex items-center cursor-pointer hover:bg-[#1A88E1] duration-500">
        <Image
          className="rounded-[100%]"
          src={"/display-picture/display.png"}
          width={50}
          height={150}
          alt="Project Logo"
        ></Image>
        <div className="ml-[1rem]">
          <h3 className="text-[18px]">XOXO Computers</h3>
          <p className="text-[12px] my-[0.3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            atque corporis mollitia nulla ...
          </p>
          <p className="text-[12px]">12th June 2024</p>
        </div>
      </div>
    </>
  );
};

export default ContentTile;
