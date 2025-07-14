import { Link, NavLink } from "react-router";
import { NavbarLinks } from "../../Data/NavbarLinks";
import { cn } from "../../libs/cn";
import Container from "../../Styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import DeopDownHistory from "../../Components/DeopDownHistory";
import { useDropDownHistoryContext } from "../../Context/DropDownHistoryContext";
import useGetHistories from "../../Hooks/useGetHistories";
import AuthFactory from "../../Utils/AuthFactory";

const Navbar = () => {
  const { isOpenHistory, handleTriggerOpenHistory } =
    useDropDownHistoryContext();
  const { History } = useGetHistories();
  return (
    <div className="bg-white sticky top-0 z-50 py-2 w-full">
      <div className={cn(Container, "flex justify-between items-center")}>
        <div className="flex items-center gap-6 max-sm:mx-4">
          <Link to={"/"}>
            <img
              src="/60ebe1aa-5f33-46a3-8a02-3ba22ec05675.png"
              alt="Brand.pdf"
              className="w-10 rounded-lg"
            />
          </Link>
          <div className="flex gap-6 max-sm:hidden items-center">
            {NavbarLinks?.map((links: { name: string }) => (
              <div
                key={links.name}
                className="hover:border-b-4 hover:border-b-blue-900"
              >
                <NavLink to={links.name.toLowerCase()}>{links.name}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 max-sm:hidden">
          <div className="relative">
            <div
              onClick={handleTriggerOpenHistory}
              className="flex gap-2 items-center border-1 border-gray-300 hover:border-blue-500 cursor-pointer px-4 py-2 rounded-2xl"
            >
              <i>
                <FaSearch color="black" />
              </i>
              <h1 className="text-md font-bold">searches</h1>
              <h1 className="text-md font-bold">{History?.length}</h1>
              <i>
                <IoMdArrowDropdown />
              </i>
            </div>
            <div className="absolute">
              {isOpenHistory && <DeopDownHistory />}
            </div>
          </div>

          <div className="flex gap-2 items-center border-1 border-gray-300 hover:border-blue-500 cursor-pointer px-4 py-2 rounded-2xl">
            <img
              src="/Flag_of_the_United_States_(Web_Colors).svg.png"
              alt="Flag_Amr.png"
              className="w-6"
            />
            <h1>English</h1>
            <IoMdArrowDropdown />
          </div>

          <div className="flex gap-2 items-center border-1 border-gray-300 hover:border-blue-500 cursor-pointer px-4 py-2 rounded-2xl">
            <h1>USD</h1>
            <IoMdArrowDropdown />
          </div>

          <AuthFactory />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
