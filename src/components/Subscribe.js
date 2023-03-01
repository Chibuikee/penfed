import React from "react";

function Subscribe() {
  return (
    <div className="bg-[#037fb0] pt-[32px] px-[8px] pb-[40px]">
      <div>
        <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
          Stay informed with email updates
        </h1>

        <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
          Take your financial knowledge further with PenFed Credit Union.
        </p>
      </div>
      <div className="md:flex gap-5">
        <input
          type="text"
          placeholder="First Name"
          className="basis-[30%]"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          className="basis-[30%]"
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          className="basis-[30%]"
        ></input>
      </div>
      <div>
        <p>
          Your information is safe with us. We will only use it to deliver
          content and promotions. You can always unsubscribe at any time.
        </p>
      </div>
      <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
        Locate ATM
      </button>
    </div>
  );
}

export default Subscribe;
