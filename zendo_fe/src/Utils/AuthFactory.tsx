import { Link } from "react-router";
import useGetUser from "../Hooks/useGetUser";
import { IoMdArrowDropdown } from "react-icons/io";
import useOpenSidebarUser from "../Hooks/useOpenSidebarUser";

const DropDownUser = () => {
  const { handleTriggerSidebar } = useOpenSidebarUser();
  const handleLogout = () => {
    window.localStorage.removeItem("User");
    window.location.reload();
  };
  return (
    <div className="w-full">
      <h1
        onClick={() => {
          handleLogout();
          handleTriggerSidebar();
        }}
        className="p-2 hover:bg-gray-200 font-semibold w-full flex justify-start"
      >
        Logout
      </h1>
    </div>
  );
};

const AuthFactory = () => {
  const { User } = useGetUser();
  const { isOpenSidebarUser, handleTriggerSidebar } = useOpenSidebarUser();
  return (
    <>
      {!User ? (
        <>
          <div className="text-md font-bold cursor-pointer">
            <Link to={"/login"}>
              <h1>Login</h1>
            </Link>
          </div>

          <div className="flex gap-2 items-center transition-all duration-500 font-bold bg-[#eef4fb] hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 rounded-2xl">
            <Link to={"/signup"}>
              <h1>Sign up</h1>
            </Link>
          </div>
        </>
      ) : (
        <div
          onClick={handleTriggerSidebar}
          className="border-2 relative cursor-pointer flex gap-2 items-center border-gray-500 py-1 px-3 rounded-xl text-center bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <img
              src="/WhatsApp Image 2023-10-12 at 21.20.49_f94a65a0.jpg"
              alt="User.png"
              className=" object-cover rounded-full"
              style={{ width: 30, height: "30px" }}
            />
            <h1>{User.findUser?.userName}</h1>
          </div>
          <div>
            <IoMdArrowDropdown />
          </div>
          {isOpenSidebarUser && (
            <div className="absolute top-10 left-0 bg-white border-2 border-gray-300 rounded-xl shadow-2xl shadow-gray-500 w-52 flex justify-start">
              <DropDownUser />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthFactory;
