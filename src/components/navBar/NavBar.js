import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ADdata, navdatajson } from "./navdata";
import NavBarr from "../navigattion";
import NavSubFolders from "../NavSubFolders";

function NavBar() {
  const [navBarToggle, setNavBarToggle] = useState(true);

  return (
    <nav className="relative">
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
      <div className="p-[27px] flex justify-between mr-7 relative">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="w-[140px] h-[35.5px]"
        />
        <div className="pc:flex  hidden">
          {navdatajson.map((item, key) => (
            <div key={item.title.name} className="bg-[#ffffff]">
              <div className="main py-5 font-bold px-[50px]">
                {item.title.name}
              </div>
              <div className="hidden sub absolute right-0 left-0 top-[70px] z-[999]">
                <NavSubFolders data={item} />
              </div>
            </div>
          ))}
        </div>
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
      </div>

      <NavBarr data={{ setNavBarToggle, navBarToggle }} />
    </nav>
  );
}

export default NavBar;
