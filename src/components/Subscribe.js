import React from "react";

function Subscribe() {
  return (
    <div className="bg-[#037fb0] text-[#fff] pt-[32px] px-[8px] pb-[40px]">
      <div>
        <h1 className="text-center font-semibold tracking-wide text-[1.5rem] break-words">
          Stay informed with email updates
        </h1>

        <p className="mt-3 text-base mb-4 text-center">
          Take your financial knowledge further with PenFed Credit Union.
        </p>
      </div>
      <div className=" md:flex flex-wrap gap-5 mt-8 px-2 w-full xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1200px] mx-auto">
        <div className="basis-[30%] pb-8">
          <input
            type="text"
            className=" px-2 php py-2 rounded w-full"
            placeholder="First Name"
          ></input>
        </div>
        <div className="basis-[30%] pb-8">
          <input
            type="text"
            className=" px-2 php py-2 rounded w-full"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="basis-[30%] pb-8">
          <input
            type="text"
            className=" px-2 php py-2 rounded w-full"
            placeholder="Email Address"
          ></input>
        </div>
        <button className="bg-[#047dba] flex justify-center  mx-auto cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[700] border rounded-[6px] border-solid border-[#ffffff]">
          Sign Up
        </button>
      </div>

      <div className="mt-4  px-2 w-full xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1200px] mx-auto">
        <p className="text-center">
          Your information is safe with us. We will only use it to deliver
          content and promotions. You can always unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
