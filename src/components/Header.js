import React from "react";
import { Search } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="p-2 m-1 grid grid-flow-col shadow-md">
      <div className="flex col-span-1 items-center gap-2">
        <div className="p-2 rounded-full hover:bg-neutral-200 cursor-pointer">
          <Menu />
        </div>
        <a href="/">
          <img
            className="h-5 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 flex justify-center items-center">
        <div className="relative w-1/2 flex">
          <input
            className="w-full px-5 border border-gray-400 rounded-l-full p-2"
            type="text"
            placeholder="Search"
          />
          <button className="border border-neutral-300 rounded-r-full px-5 py-2 bg-neutral-100">
            <Search />
          </button>
        </div>
      </div>

      <div className="col-span-1 flex justify-end">
        <button className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1 hover:bg-blue-100 hover:border-transparent transition">
          <CircleUserRound className="text-blue-600" />
          <span className="text-sm text-blue-600 font-semibold">Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
