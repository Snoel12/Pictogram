import React from "react";
import Image from "next/image";
import titleLogo from "../assets/titlelogo.png";
import mobileLogo from "../assets/mobileLogo.png";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className=" bg-white">
      <div className="flex justify-between max-w-6xl">
        {/*Logo*/}

        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer object-fill">
          <div className="flex flex-col">
            <div className="h-4 invisible">jjjjj</div>
            <Image src={titleLogo} alt="title logo" />
          </div>
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={mobileLogo} alt="mobile logo" />
        </div>
        {/*Search Bar*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        {/*React Icons*/}
      </div>
    </div>
  );
};

export default Header;
