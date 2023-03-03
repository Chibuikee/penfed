import { useState } from "react";
import { ADdata, navdatajson } from "./navBar/navdata";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
function NavBarr({ data }) {
  const [activeFolder, setActiveFolder] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  function getSubFolderByTitle(folders, title) {
    // Loop through each folder object in the array
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];

      // If the folder's title matches the given title, return the folder
      if (folder.title.name === title) {
        return folder;
      }

      // If the folder has childList, recursively search through them
      if (folder.childList.length > 0) {
        const subFolder = getSubFolderByTitle(folder.childList, title);
        if (subFolder) {
          return subFolder;
        }
      }
    }

    // If no folder is found, return null
    return null;
  }
  const folders = navdatajson;

  const subFolder = getSubFolderByTitle(folders, isOpen);

  // console.log(activeFolder, subFolder); // Output: { title: { name: "IRA CERTIFICATE", url: "/IRA_CERTIFICATE" }, childList: [] }

  return (
    <div
      className={` ${
        !data.navBarToggle ? "fixed" : "hidden"
      } top-0 h-[100vh] left-0 w-full bg-[#0c264b] z-[99]`}
    >
      <nav className="  bg-[#0c264b] relative">
        {activeFolder == null || activeFolder?.length == 0 ? (
          <div className="flex justify-between items-center py-6 px-2 flex-shrink-0 mr-4 ">
            <span className="text-xl font-semibold tracking-tight text-white">
              <img
                className="w-[140px] h-[36.2px]"
                src="https://www.penfed.org/content/dam/penfed/penfed-dam-samples/penfed-logo-white.svg"
              />
            </span>
            <div className=" lg:hidden flex gap-5">
              <button className="flex items-center px-3 py-2 border bg-[white] rounded text-[#0c264b] border-gray-600 hover:text-[red] hover:border-white">
                <HiSearch size={20} />
              </button>
              <button
                className="flex items-center px-3 py-2 border bg-[white] rounded text-[#0c264b] border-gray-600 hover:text-[red] hover:border-white"
                onClick={() => data.setNavBarToggle(!data.navBarToggle)}
              >
                <RiCloseFill size={20} className="font-[700]" />
              </button>
            </div>
            <div className="h-[0.5px] w-[100%] absolute top-[80px] left-0 bg-[#8b8b8b]"></div>
          </div>
        ) : null}

        <div className="">
          {
            <div>
              <div className="px-6">
                {activeFolder == null || activeFolder?.length == 0
                  ? navdatajson?.map((folder) => (
                      <li
                        key={folder.title.name}
                        onClick={() => {
                          !activeFolder && setActiveFolder([folder.title.name]);
                          activeFolder &&
                            setActiveFolder((item) => [
                              ...item,
                              folder.title.name,
                            ]);
                          // if (activeFolder == isOpen) setActiveFolder(null);
                          setIsOpen(folder.title.name);
                        }}
                        className="text-[#ffffff] flex justify-between text-[14px] font-semibold py-5 "
                      >
                        <div className="flex">
                          <folder.icon size={20} />
                          <h3 className="ml-2">{folder.title.name}</h3>
                        </div>
                        <span className="inline">
                          <MdArrowForwardIos className="inline ml-10" />
                        </span>
                      </li>
                    ))
                  : null}
              </div>
              <ul className="">
                <div
                  className={`flex justify-between pl-2 pr-6 items-center ${
                    activeFolder == null || activeFolder?.length == 0
                      ? null
                      : "py-5"
                  } bg-[#ecebeb] `}
                >
                  <div className="flex text-[18px] font-semibold ">
                    <h1
                      onClick={() => {
                        // console.log("back handler clicked");
                        const back = activeFolder;
                        back.pop();
                        const go = back.slice(-1);
                        // console.log(go[0], "back handler");
                        setIsOpen(go[0]);
                      }}
                      className={`text-[#0c264b] mt-[2px] ${
                        activeFolder == null || activeFolder?.length == 0
                          ? "hidden"
                          : "block"
                      }`}
                      size={20}
                    >
                      <MdArrowBackIosNew size={20} />
                    </h1>

                    <h1 className="text-[#0c264b] inline ml-2">
                      {subFolder?.title.name}
                    </h1>
                  </div>

                  <RiCloseFill
                    className={`text-[#0c264b] ${
                      activeFolder == null || activeFolder?.length == 0
                        ? "hidden"
                        : "block"
                    }`}
                    size={35}
                  />
                </div>

                <div
                  className={` pb-10 ${
                    activeFolder == null || activeFolder?.length == 0
                      ? null
                      : "bg-[#ffffff]"
                  }  `}
                >
                  {subFolder?.childList.map((subfolder) => (
                    <div
                      key={subfolder.title.name}
                      onClick={() => {
                        setActiveFolder((item) => [
                          ...item,
                          subfolder.title.name,
                        ]);
                        setIsOpen(subfolder.title.name);
                      }}
                      className="text-[#0d6efd] flex justify-between bg-white items-center font-semibold px-6 pt-10"
                    >
                      <h3 className=""> {subfolder.title.name}</h3>
                      <span className="inline">
                        <MdArrowForwardIos className="inline ml-10" />
                      </span>
                    </div>
                  ))}
                </div>
              </ul>
              <div className="grid grid-cols-2 list-none mt-6 px-6">
                {ADdata.filter(
                  (item) =>
                    item.name !== "ROUTING # 256078446" &&
                    item.name !== "SEARCH"
                ).map((item) => (
                  <li className="mt-2 text-[.75rem] text-[#ffffff]">
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
          }
        </div>
        <div className="pt-[9px] pb-[25px] bg-[#455974] fixed bottom-0 left-0 w-full">
          <h3 className="text-xs text-center text-[#ffffff]">
            ROUTING # 256078446
          </h3>
        </div>
      </nav>
    </div>
  );
}

export default NavBarr;
