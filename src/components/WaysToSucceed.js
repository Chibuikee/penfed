import React from "react";
import hero_deck_mobile_app from "../assets/images/hero-deck-mobile-app-400x400.jpeg";
function WaysToSucceed() {
  return (
    <section>
      <div className="w-full xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1200px] mx-auto ">
        <div>
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            Ways We Can Help You Succeed
          </h1>

          <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
            Whether you need to save money, borrow funds, or manage your
            accounts, we have your back every step of the way.
          </p>
        </div>
        <div className="flex">
          <img
            src="https://www.penfed.org/content/dam/penfed/general/img/2021/homepage-tiles/ATM-Locator-Tile_2022.06.jpg"
            alt="atm"
            className="basis-[30%] h-[309px]"
          />
          <div className="basis-[50%] p-[3rem]">
            <h3>Access Your Money Anywhere</h3>
            <p className=" my-[10px] pb-[28px]">
              With access to over 85,000 fee free ATMs, PenFed makes it
              convenient to withdraw cash, transfer funds or check your PenFed
              checking or savings account balance. Find a fee free ATM near you.
            </p>
            <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
              Locate ATM
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="basis-[50%] p-[3rem]">
            <h3>Access Your Money Anywhere</h3>
            <p className="my-[10px] pb-[28px]">
              With access to over 85,000 fee free ATMs, PenFed makes it
              convenient to withdraw cash, transfer funds or check your PenFed
              checking or savings account balance. Find a fee free ATM near you.
            </p>
            <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
              Locate ATM
            </button>
          </div>
          <img
            src={hero_deck_mobile_app}
            alt="assistant"
            className="basis-[30%] h-[309px]"
          />
        </div>
      </div>
    </section>
  );
}

export default WaysToSucceed;
