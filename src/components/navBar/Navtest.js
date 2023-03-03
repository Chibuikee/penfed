import React, { useEffect, useState } from "react";
import { navdatajson } from "./navdata";

import { Link, useNavigate } from "react-router-dom";
import NavBarr from "../navigattion";
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
      {<NavBarr data={navdatajson} />}
    </div>
  );
}

export default Navtest;
