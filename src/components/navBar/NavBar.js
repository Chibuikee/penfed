import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [navBarToggle, setNavBarToggle] = useState(true);

  const ADdata = [
    {
      name: "ROUTING # 256078446",
      url: "#",
    },
    {
      name: "PARTNERS",
      url: "#",
    },
    {
      name: "MEMBER DISCOUNTS",
      url: "#",
    },
    {
      name: "WEALTH",
      url: "#",
    },
    {
      name: "FOUNDATION",
      url: "#",
    },
    {
      name: "BRANCHES & ATMS",
      url: "#",
    },
    {
      name: "ABOUT",
      url: "#",
    },
    {
      name: "SEARCH",
      url: "#",
    },
  ];

  return (
    <nav className="">
      <div className="p-[6px] bg-[#f4f4f4] hidden lg:block">
        <ul className="flex justify-between ml-[150px] ">
          {ADdata.map((item) => (
            <li
              className={`${
                item.name == "SEARCH" ? "text-[red]" : "text-[#282828]"
              }] text-[.75rem]`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-[27px] flex justify-between mr-7">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="w-[140px] h-[35.5px]"
        />
        <Link to="/Login">
          <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
            Login
          </button>
        </Link>
      </div>
      <div className=" absolute pc:static right-0 top-[33px] pc:top-[50px]">
        <input type="checkbox" id="check" className="hidden" />
        <label
          htmlFor="check"
          className="navdrop-ctn block pc:hidden absolute right-5"
          onClick={() => setNavBarToggle(!navBarToggle)}
        >
          {navBarToggle ? (
            <FaBars size={25} className="navdrop-1" />
          ) : (
            <RiCloseFill size={25} className="navdrop-2" />
          )}
        </label>

        {/* <ul className="s:flex w-[200px] s:w-[initial] mt-[51px] s:mt-[10px]  p-4 s:p-[initial] justify-between menu-main bg-[#edf5fa] rounded s:bg-[initial] s:h-[initial] h-[242px]">
          {data.map((item, key) => (
            <li key={key} className="my-3 s:my-[initial] text-sm font-semibold">
              {item.name}
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
}

export default NavBar;
