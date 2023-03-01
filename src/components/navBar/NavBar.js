import React from "react";
function NavBar() {
  return (
    <nav className="">
      <div className="p-5 flex justify-between">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="w-[140px] h-[35.5px]"
        />
        <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
