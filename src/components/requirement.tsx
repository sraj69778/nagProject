import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Requirement: React.FC = () => {
  return (
    <div className="w-[80%] m-auto flex mb-4 flex-col h-full items-center">
      <div className="text-center flex justify-center">
        <h2 className="text-[#D9D9D9]  w-[60%]  mt-[2%] text-[20px] font-medium">
          Post your requirement and get access to services across the world
        </h2>
      </div>

      {/* Form Section */}
      <div className="w-[65%] mx-auto my-[3%]">
        <div className="flex flex-row mt-[4%]">
          <div className="mr-auto w-[45%]">
            <Label className="text-[#D9D9D9]" htmlFor="company">
              Company
            </Label>
            <Input
              id="company"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
          <div className="w-[45%]">
            <Label className="text-[#D9D9D9]" htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-row mt-[4%]">
          <div className="mr-auto w-[45%]">
            <Label className="text-[#D9D9D9]" htmlFor="price">
              Sector
            </Label>
            <Input
              id="price"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="number"
            />
          </div>
          <div className="w-[45%]">
            <Label className="text-[#D9D9D9]" htmlFor="location">
              Location
            </Label>
            <Input
              id="location"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-[6%]">
          <Label className="text-[#D9D9D9]" htmlFor="requirement">
            Required service/product
          </Label>
          <textarea
            id="requirement"
            className="bg-[#D9D9D9] mt-[10px] rounded w-full h-[60px] p-2 resize-none"
          ></textarea>
          <Label className="text-[#D9D9D9] mt-[5%]" htmlFor="text">
            Description
          </Label>
          <textarea
            id="description"
            className="bg-[#D9D9D9] mt-[10px] rounded w-full p-2 resize-none"
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col mt-[4%] w-[50%]">
          <Label className="text-[#D9D9D9]">Budget</Label>
          <div className="flex flex-row items-center">
            <div className="mr-auto w-[40%] mt-2 flex flex-col">
              <Label className="text-[#D9D9D9] text-[10px]" htmlFor="minPrice">
                Min.
              </Label>
              <Input
                id="minPrice"
                className="bg-[#D9D9D9] mt-[5px] rounded"
                type="number"
              />
            </div>
            <div className="w-[40%] flex flex-col">
              <Label className="text-[#D9D9D9] text-[10px]" htmlFor="maxPrice">
                Max.
              </Label>
              <Input
                id="maxPrice"
                className="bg-[#D9D9D9] mt-[5px] rounded"
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-[8%]">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
