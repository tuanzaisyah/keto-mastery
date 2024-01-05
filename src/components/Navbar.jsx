import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full max-w-[1280px] h-20 px-6 pt-4 z-20 bg-bg-color dark:bg-black-color ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="./assets/logo.png"
            alt="logo"
            className="w-12 h-12 object-cover"
          />
          <span className="text-2xl font-logo text-main-color-alt">
            Keto Mastery
          </span>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black-color dark:text-grey-color-alt hover:text-main-color cursor-pointer md:hidden"
        >
          <BiMenu />
        </div>

        <ul
          className={`flex flex-col items-center md:flex-row gap-0 md:gap-8  md:pb-0 pb-12 absolute top-0 left-0 md:static bg-main-color md:bg-bg-color md:dark:bg-black-color w-full md:w-auto text-center transition-all duration-300 ease-in-out md:transition-none ${
            menuOpen ? "top-0" : "top-[-490px]"
          }`}
        >
          <AiOutlineClose
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black-color dark:text-grey-color-alt text-xl absolute right-6 top-4 cursor-pointer hover:text-bg-color md:hidden"
          />
          <li className="my-4">
            <a
              className="text-black-color dark:text-grey-color-alt  hover:text-bg-color md:hover:text-main-color font-medium"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-black-color dark:text-grey-color-alt hover:text-bg-color md:hover:text-main-color font-medium"
              href="#about"
            >
              About Us
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-black-color dark:text-grey-color-alt hover:text-bg-color md:hover:text-main-color font-medium"
              href="#offer"
            >
              Offer
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-black-color dark:text-grey-color-alt hover:text-bg-color md:hover:text-main-color font-medium"
              href="#community"
            >
              Community
            </a>
          </li>
          <li className="">
            {theme === "dark" ? (
              <FiSun
                className="text-black-color dark:text-grey-color-alt  cursor-pointer hover:text-bg-color md:hover:text-main-color"
                onClick={handleThemeSwitch}
              />
            ) : (
              <BsMoon
                className="text-black-color dark:text-grey-color-alt  cursor-pointer hover:text-bg-color md:hover:text-main-color"
                onClick={handleThemeSwitch}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
