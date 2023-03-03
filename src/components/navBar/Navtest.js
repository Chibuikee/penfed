import React, { useEffect, useState } from "react";
import { navdatajson } from "./navdata";

import { Link, useNavigate } from "react-router-dom";
import NavBarr from "../navigattion";
import NavSubFolders from "../NavSubFolders";
function Navtest() {
  const [navBarToggle, setNavBarToggle] = useState(true);
  //   const navigate = useNavigate();
  // const [Amount, setAmount] = useState("Nike");

  useEffect(() => {
    const w = () => {
      window.innerWidth === 800 && setNavBarToggle(true);
    };
    window.addEventListener("resize", w);
    return () => {
      window.removeEventListener("resize", w);
    };
  }, []);

  // function handleNavigation(page) {
  //   // navigate("/Shop", { state: { data: "Yes it worked!!" } });
  // }
  return (
    <div className="">
      <Link to="/Navtest">
        <a href="#" className="flex text-xl font-semibold whitespace-nowrap ">
          MUSKNET
        </a>
      </Link>
      <div>
        <div className="flex gap-10">
          {navdatajson.map((item, key) => (
            <div key={item.title.name} className="">
              <div className="main">{item.title.name}</div>
              <div className="hidden sub">
                <NavSubFolders data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navtest;
{
  /* <div className="flex gap-10">
          {navdatajson[0].childList.map((item) => (
            <div key={item.title.name}>{item.title.name}</div>
          ))}

        </div> */
}
