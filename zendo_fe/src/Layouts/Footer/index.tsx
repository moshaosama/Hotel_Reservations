import { Link } from "react-router-dom";
import { cn } from "../../libs/cn";
import Container from "../../Styles";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={cn(Container)}>
      <div className={cn("flex justify-between")}>
        <div className="flex flex-col">
          <Link to={""}>About Us</Link>
          <Link to={""}>Privacy Policy</Link>
          <Link to={""}>File A Claim</Link>
        </div>

        <div className="flex flex-col">
          <Link to={""}>Contact Us</Link>
          <Link to={""}>Become A Supplier</Link>
          <Link to={""}>Carrers And Jobs</Link>
        </div>

        <div className="flex flex-col">
          <Link to={""}>Terms Of Use</Link>
          <Link to={""}>Faq</Link>
          <Link to={""}>How To Book</Link>
        </div>

        <div className="flex flex-col">
          <Link to={""}>Cookies Policy</Link>
          <Link to={""}>Booking Tips</Link>
        </div>
      </div>

      <div className="mt-10 flex gap-10 justify-between">
        <div className="flex gap-4 items-center">
          <img
            src="/60ebe1aa-5f33-46a3-8a02-3ba22ec05675.png"
            alt="Brand.png"
            className="w-20 rounded-lg"
          />
          <div>
            <h1 className="text-gray-500">+123456789</h1>
            <h1 className="text-md font-bold">mohamedOSFekry@gmail.com</h1>
            <h1 className="text-md font-bold">Contact Us</h1>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="border-2 border-gray-300 w-48 text-black focus:outline-none py-4 px-3 rounded-xl"
            placeholder="Name"
          />

          <input
            type="text"
            className="border-2 border-gray-300 w-48 text-black focus:outline-none py-4 px-3 rounded-xl"
            placeholder="Name"
          />

          <div>
            <button className="w-48 bg-blue-500 py-4 text-white font-bold rounded-xl">
              Signup Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <div>
          <h1 className="text-md">All Rights Reserved by PHPTARVELS</h1>
        </div>

        <div>
          <h1>Powered by Mo4aOsama v9.1</h1>
        </div>

        <div className="flex gap-3">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaGithub size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
