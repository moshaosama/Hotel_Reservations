import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSignalHigh } from "react-icons/lu";
import DisplayData from "./DisplayData";
import SearchByName from "./SearchByName";
import useOpenFilteration from "../Hooks/useOpenFilteration";
import { cn } from "../../../libs/cn";
import AllStars from "./AllStars";

const FilterationData = () => {
  const {
    handleTriggerOpenSearchByName,
    isOpenSearchByName,
    isOpenStars,
    handleTriggerOpenStars,
  } = useOpenFilteration();
  return (
    <>
      <div className="mt-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="max-sm:hidden">
            <button className="w-64 border-2 text-md flex items-center bg-[#e1effd] cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <CiSearch />
              Modify Search
            </button>
          </div>

          <div>
            <button className="w-96 border-2 max-sm:w-48 text-md flex items-center hover:bg-[#e1effd] cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <LuSignalHigh size={22} />
              Lowest to Higher
            </button>
          </div>

          <div>
            <button className="w-96 border-2 max-sm:w-48 text-md flex items-center hover:bg-[#e1effd]  cursor-pointer justify-center gap-4 py-1 border-[#e1effd] rounded-lg">
              <LuSignalHigh size={22} className="rotate-y-180" />
              Highest to Lower
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col max-sm:hidden gap-4">
            <div
              className={cn(
                "border-2 border-gray-200 transition-all overflow-hidden duration-200 rounded-lg pb-2",
                isOpenSearchByName ? "h-32" : "h-12"
              )}
            >
              <div
                onClick={handleTriggerOpenSearchByName}
                className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg"
              >
                <div>
                  <h1 className="text-sm font-bold">Search By Name</h1>
                </div>
                <div>
                  <IoMdArrowDropdown />
                </div>
              </div>
              {isOpenSearchByName && <SearchByName />}
            </div>

            <div
              className={cn(
                "border-2 border-gray-200 transition-all overflow-hidden duration-200 rounded-lg pb-2",
                isOpenStars ? "h-52" : "h-12"
              )}
            >
              <div
                onClick={handleTriggerOpenStars}
                className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg"
              >
                <div>
                  <h1 className="text-sm font-bold">Star Rating</h1>
                </div>
                <div>
                  <IoMdArrowDropdown />
                </div>
              </div>
              {isOpenStars && <AllStars />}
            </div>

            <div className="w-64 border-2 text-md flex  bg-[#e1effd] cursor-pointer justify-between items-center px-2 gap-4 py-3 border-[#e1effd] rounded-lg">
              <div>
                <h1 className="text-sm font-bold">Price Range</h1>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>

          <div className="mx-5 max-sm:mx-0">
            <DisplayData />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterationData;
