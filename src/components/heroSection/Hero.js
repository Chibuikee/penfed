import React from "react";

function Hero() {
  return (
    <section className="">
      <div className="w-full xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] mx-auto relative"></div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.827),rgba(0,0,0,0.3)),url('https://www.penfed.org/content/dam/penfed/general/img/2023/homepage/auto-promo-r1-billboard-1660x400.jpg')",
        }}
        className="text-[#fff] text-[1.5rem] bg-right bg-cover w-[100%] h-[420px] relative"
      >
        <div className="h-full mx-auto xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1200px] absolute top-0 left-0 right-0 text-[#ffffff] text-[20px] px-[36px]">
          <h2 className="mt-[8px] text-base font-[700] tracking-[3px] pt-[24px]">
            AUTOS PROMOTION
          </h2>
          <div className="w-[200px] h-[5px] bg-[#047dba] "></div>
          <h1 className="text-[32px] font-[700] pt-[24px]">
            {" "}
            $350 Bonus with Vehicle Purchase
          </h1>
          <ul className="list-disc ml-[24px] mt-2">
            <li className="text-base  ">
              When you use the PenFed Car Buying Service and a PenFed auto loan
            </li>
            <li className="text-base mt-2">Rates as low as 4.89% APR*</li>
          </ul>

          <button className="bg-[#047dba] mt-5 cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[600] border rounded-[6px] border-solid border-[#398007]">
            Find a Car
          </button>
          <h3 className="text-xs font-[600] mt-5">Offer ends April 30, 2023</h3>
        </div>
      </div>
      {/* <img src="" alt="company car" /> */}
    </section>
  );
}

export default Hero;
