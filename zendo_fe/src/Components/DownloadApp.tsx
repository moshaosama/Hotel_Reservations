import { GrAppleAppStore } from "react-icons/gr";
import Container from "../Styles";
import { IoVideocam } from "react-icons/io5";
import { cn } from "../libs/cn";

const DownloadApp = () => {
  return (
    <>
      <div className="bg-blue-500 my-20 max-sm:pt-4">
        <div
          className={cn(
            Container,
            "flex items-center max-sm:flex-col  justify-between gap-20"
          )}
        >
          <div className="flex flex-col w-fit gap-2 text-white">
            <button className="border-2 border-white p-4 rounded-lg flex items-center gap-4 hover:bg-black hover:border-black cursor-pointer">
              <i>
                <IoVideocam />
              </i>
              PLAYSTORE
            </button>
            <button className="border-2 border-white p-4 rounded-lg flex items-center gap-4 hover:bg-black hover:border-black cursor-pointer">
              <i>
                <GrAppleAppStore />
              </i>
              APP STORE
            </button>
          </div>

          <div className="flex flex-col gap-3 max-sm:text-center text-white">
            <h1 className="text-2xl font-bold">Get The App!</h1>
            <p>
              Our app has all your travel needs covered: Secure payment
              channels, easy 4-step booking process. What more could you ask
              for?
            </p>
          </div>

          <div>
            <img
              src="https://phptravels.net/assets/img/apps.png"
              alt="Phone.png"
              className=" w-[35pc]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
