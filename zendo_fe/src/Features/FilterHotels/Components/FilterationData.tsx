import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSignalHigh } from "react-icons/lu";
import DisplayData from "./DisplayData";

const FilterationData = () => {
  return (
    <>
      <div className="mt-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <div>
            <button className="w-64 border-2 text-md flex items-center bg-[#e1effd] cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <CiSearch />
              Modify Search
            </button>
          </div>

          <div>
            <button className="w-96 border-2 text-md flex items-center hover:bg-[#e1effd] cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <LuSignalHigh size={22} />
              Lowest to Higher
            </button>
          </div>

          <div>
            <button className="w-96 border-2 text-md flex items-center hover:bg-[#e1effd]  cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <LuSignalHigh size={22} className="rotate-y-180" />
              Highest to Lower
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg">
              <div>
                <h1 className="text-sm font-bold">Search by Name</h1>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>

            <div className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg">
              <div>
                <h1 className="text-sm font-bold">Search by Name</h1>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>

            <div className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg">
              <div>
                <h1 className="text-sm font-bold">Search by Name</h1>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>

          <div className="mx-5">
            <DisplayData />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterationData;
