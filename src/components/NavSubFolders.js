import React from "react";

function NavSubFolders({ data }) {
  return (
    <div className="flex justify-between w-[100vw] bg-[white]">
      {data.childList.map((item) => (
        <div
          key={item.title.name}
          className="grid grid-rows-3 bg-[#fdf4f4] font-bold text-[#0e0d0d] w-[100vw]"
        >
          <h1 className="bg-[#9fabc3] text-[#181515] h-[50px] leading-[50px] pl-5 ">
            {item.title.name}
          </h1>
          {item.childList.map((item) => (
            <div key={item.title.name} className="text-[#000000] ">
              {item.title.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default NavSubFolders;
