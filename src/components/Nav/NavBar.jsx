import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../../assets/images/index";

const NavBar = () => {
  const menuRef = useRef(null);
  const { pathname } = location;

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (openMenu === true) setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, openMenu]);

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div
        ref={menuRef}
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 "
            style={{ stroke: "#ffffff" }}
          />
          <span className="self-center text-md sm:text-2xl font-semibold whitespace-nowrap text-white">
            Insulation Calculator
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${openMenu ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-900  border-gray-700">
            <li>
              <NavLink
                to="/"
                className={` ${
                  pathname === "/" ? "text-blue-500" : "text-white"
                } block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/estimate-bands"
                className={` ${
                  pathname === "/estimate-bands"
                    ? "text-blue-500"
                    : "text-white"
                } block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent`}
              >
                Bands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/insulation-landing"
                className={` ${
                  pathname === "/insulation-landing"
                    ? "text-blue-500"
                    : "text-white"
                } block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent`}
              >
                Insulation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/estimate-metal"
                className={` ${
                  pathname === "/estimate-metal"
                    ? "text-blue-500"
                    : "text-white"
                } block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent`}
              >
                Metal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/estimate-sheet-insulation"
                className={` ${
                  pathname === "/estimate-sheet-insulation"
                    ? "text-blue-500"
                    : "text-white"
                } block py-2 px-3 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent`}
              >
                Estimate all
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
