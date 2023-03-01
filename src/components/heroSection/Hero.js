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
        className="text-[white] text-[1.5rem] bg-right bg-cover w-[100%] h-[420px]"
      >
        <div className="h-full w-full absolute top-0 left-0 text-[#ffffff] text-[20px]">
          <h2>AUTOS PROMOTION</h2>
          <div className="w-[100px] h-[10px] bg-[red]"></div>
          <h1 className="text-[32px]"> $350 Bonus with Vehicle Purchase</h1>

          <h3>
            When you use the PenFed Car Buying Service and a PenFed auto loan
          </h3>
          <h3>Rates as low as 4.89% APR*</h3>
          <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
            Find a Car
          </button>
          <h3>Offer ends April 30, 2023</h3>
        </div>
      </div>
      <img src="" alt="company car" />
    </section>
  );
}

export default Hero;
