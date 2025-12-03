import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-2 m-1 grid grid-flow-col shadow-md">
      <div className="flex col-span-1 items-center gap-2">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
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
          <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-200">
            <Search />
          </button>
        </div>
      </div>

      <div className="col-span-1 flex justify-end">
        <button className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 hover:bg-gray-100 transition">
          <img
            className="h-6"
            alt="user-logo"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          />
          <span className="text-sm font-semibold">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
