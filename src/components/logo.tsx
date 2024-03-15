import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <div className="flex items-center px-[1rem]">
        <Image
          src={"/Project_Logo.svg"}
          width={50}
          height={100}
          alt="Project Logo"
        />
        <p className="text-[#dbdbdb] text-[24px] font-bold mx-[0.5rem]">
          Discuz
        </p>
      </div>
    </div>
  );
};

export default Logo;
