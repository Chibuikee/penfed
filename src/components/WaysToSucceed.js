import React from "react";
import hero_deck_mobile_app from "../assets/images/hero-deck-mobile-app-400x400.jpeg";
function WaysToSucceed() {
  return (
    <section className="px-2 mb-10">
      <div className="mx-[20px]">
        <div className="w-full mx-auto ">
          <div>
            <h1 className="text-center font-semibold tracking-wide text-[2rem]">
              Ways We Can Help You Succeed
            </h1>

            <p className=" text-[#282828] text-[1.15rem] my-[10px] text-center">
              Whether you need to save money, borrow funds, or manage your
              accounts, we have your back every step of the way.
            </p>
          </div>
          <div className="md:flex mb-10 rounded-[1.5rem] shadow-[6px_6px_26px_1px_rgba(0,0,0,0.87)]">
            <div className="md:basis-[30%] w-full flex-shrink-0 ">
              <img
                src="https://www.penfed.org/content/dam/penfed/general/img/2021/homepage-tiles/ATM-Locator-Tile_2022.06.jpg"
                alt="atm"
                className="w-full h-full"
              />
            </div>
            <div className=" p-[1.5rem] md:p-[3rem] md:flex-grow">
              <h3>Access Your Money Anywhere</h3>
              <p className=" mt-[10px] pb-[28px]">
                With access to over 85,000 fee free ATMs, PenFed makes it
                convenient to withdraw cash, transfer funds or check your PenFed
                checking or savings account balance. Find a fee free ATM near
                you.
              </p>
              <div className="h-[1px] w-full bg-slate-300 mb-5"></div>
              <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
                Locate ATM
              </button>
            </div>
          </div>
          <div className="md:flex bg-[#fff] rounded-[1.5rem] flex-row-reverse  shadow-[6px_6px_26px_1px_rgba(0,0,0,0.87)]">
            <div className="md:basis-[30%] flex-shrink-0 ">
              <img
                src={hero_deck_mobile_app}
                alt="assistant"
                className="w-full h-full"
              />
            </div>
            <div className=" md:p-[3rem] p-[1.5rem] md:flex-grow">
              <h3>Access Your Money Anywhere</h3>
              <p className="mt-[10px] pb-[28px]">
                With access to over 85,000 fee free ATMs, PenFed makes it
                convenient to withdraw cash, transfer funds or check your PenFed
                checking or savings account balance. Find a fee free ATM near
                you.
              </p>
              <div className="h-[1px] w-full bg-slate-300 mb-5"></div>
              <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
                Locate ATM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaysToSucceed;
