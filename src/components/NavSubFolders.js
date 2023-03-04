import React from "react";

function NavSubFolders({ data }) {
  return (
    <div className="flex justify-between w-[100vw] bg-[white]  after:content-[''] after:absolute after:top-0 after:h-[3px] after:w-[100%] after:left-0 after:right-0 after:bg-[#047dba] ">
      {data.childList.map((item) => (
        <div
          key={item.title.name}
          className="grid bg-[#fdf4f4] font-bold text-[#0e0d0d] w-[100vw] grid-flow-row pb-5"
        >
          <h1 className="bg-[#9fabc3] text-[#181515] h-[50px] leading-[50px] pl-9 ">
            {item.title.name}
          </h1>
          {item?.url?.name && (
            <img src={item?.url?.name} className="" alt="advert" />
          )}
          <div className=" after:content-[''] after:absolute after:top-14 after:h-[60%] after:w-[0.5px] after:bg-[#dbd5d5]">
            {item.childList.map((item) => (
              <div
                key={item.title.name}
                className="text-[#000000] font-[300] py-2 px-9"
              >
                {item.title.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavSubFolders;
