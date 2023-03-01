import React from "react";

function Featuredarticles() {
  const features = [
    {
      link: "#",
      title: "10 Essential Strategies to Help You Qualify for a Credit Card",
    },
    { link: "#", title: "Top Reasons for a Credit Union Home Refinance " },
    { link: "#", title: "5 Proven Budgeting Strategies to Know" },
  ];

  return (
    <section className="w-full bg-[#f4f4f4]">
      <div className="py-[48px]">
        <div className="px-4 mx-auto">
          <h1 className="font-semibold text-center mb-[40px] text-[2rem]">
            Featured Articles
          </h1>
          <div className="md:flex gap-5 max-w-[315px] xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1152px] mx-auto flex-wrap justify-center">
            {features.map((item) => (
              <div className="basis-[45%] lg:basis-[30%]">
                <div
                  style={{
                    backgroundImage:
                      "url('https://www.penfed.org/content/dam/penfed/blogimages/2021/lc-proven-budgeting-strategies.jpg')",
                  }}
                  className="text-[white] text-[1.5rem] bg-center bg-cover  h-[220px] w-full "
                ></div>
                <div className="text-center p-4">
                  <p className="text-center text-[1.13rem] mt-5 font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-[#047dba] flex justify-center  mx-auto cursor-pointer py-2 px-[1.375rem] text-base  text-[#ffffff] font-[700] border rounded-[10px] border-solid border-[#ffffff]">
            See All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default Featuredarticles;
