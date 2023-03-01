import React from "react";

function Latest() {
  const ADdata = [
    {
      name: "Sky-High Certificate Rates",
      info: "Earn 4.70% for 18 month terms and 4.65% for 15 month terms",
      img: "#",
      img: "#",
      button: "Open Now",
    },
    {
      name: "Save Faster for Your Next Big DIY",
      info: "Earn 2.70% APY with PenFed`s Premium Online Savings",
      url: "#",
      img: "#",
      button: "Start Saving",
    },
    {
      name: "Because Some Expenses Can`t Wait",
      info: "Get paid 2 days early when you set up direct deposits with PenFed checking accounts",
      url: "#",
      img: "#",
      button: "See Options Now",
    },
    {
      name: "No Caps, No Limits, No Expiration",
      info: " Get more from your rewards with PenFed`s Power Cash Rewards card",
      url: "#",
      img: "#",
      button: "Apply Now",
    },
  ];

  return (
    <div className="h-full px-[8px]">
      <h1 className="text-center  py-10 tracking-wide text-[2rem] text-[#000000] ">
        The Latest From PenFed Credit Union
      </h1>
      <div className="pc:grid xs:flex flex-wrap latest-ctn justify-between">
        {ADdata.map((item, key) => (
          <div
            key={key}
            style={{
              backgroundImage:
                "url('https://www.penfed.org/content/dam/penfed/general/img/2023/homepage/auto-promo-r1-billboard-1660x400.jpg')",
            }}
            className="text-[#fff] text-[1.5rem] bg-right bg-cover p-4 relative mt-4 xs:mt-[initial] xs:basis-[49%]"
          >
            <h2 className="mt-[8px] text-base font-[700] tracking-[3px]  text-[24px]">
              {item.name}
            </h2>
            <p className="font-[300] text-base mt-2 tracking-[.5px]">
              {item.info}
            </p>
            <button className="bg-[#fff] text-[#047dba] mt-5 cursor-pointer py-[0.375rem] px-[2rem] text-base font-[600] border-[2px] rounded-[8px] border-solid border-[#047dba]">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
