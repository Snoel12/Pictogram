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
import { HomeIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/*Logo*/}

        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer object-fill"
        >
          <div className="flex flex-col">
            <div className="h-5 invisible">jjjjj</div>
            <Image src={titleLogo} alt="title logo" />
          </div>
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <div className="flex flex-col">
            <div className="hid">jjjjj</div>
            <Image src={mobileLogo} alt="title logo" />
          </div>
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
        <div className="flex flex-col">
          <div className="hid">jjj</div>
          <div className="flex items-center justify-end space-x-4 pb-7">
            <HomeIcon onClick={() => router.push("/")} className="navBtn" />
            <Bars3Icon className="h-6 md:hidden cursor-pointer" />
            {session ? (
              <>
                <div className="relative navBtn">
                  <PaperAirplaneIcon className="navBtn -rotate-45" />
                  <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                    3
                  </div>
                </div>

                <PlusCircleIcon
                  onClick={() => setOpen(true)}
                  className="navBtn"
                />
                <UserGroupIcon className="navBtn" />
                <HeartIcon className="navBtn" />
                <img
                  onClick={signOut}
                  src={session.user.image}
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
              </>
            ) : (
              <button onClick={signIn}>Sign In</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
