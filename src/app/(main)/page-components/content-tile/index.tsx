export const ContentTile = ({content}:{content:any}) => {
  return (
      <div className={`bg-[#3f3f3f] m-2 p-3 w-[${content.width}] h-[80px] text-[#fff] rounded-2xl flex items-center cursor-pointer hover:bg-[#1A88E1] duration-500`}>
        <img
          className="rounded-[100%] w-[10%] h-[100%]"
          src={content.imgPath}
          alt="Project Logo"
        ></img>
        <div className="ml-[1rem]">
          <h3 className="text-[90%]">{content.title}</h3>
          <p className="text-[60%] my-[1%]">
            {content.description}
          </p>
          <p className="text-[70%]">{content.date}</p>
        </div>
      </div>
  );
};

export default ContentTile;
