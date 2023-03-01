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
    <section className="w-full">
      <div className="px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px] py-12 lg:flex">
        <div className="flex gap-5 w-[90%] mx-auto">
          {features.map((item) => (
            <div className="basis-[30%]">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.827),rgba(0,0,0,0.3)),url('https://www.penfed.org/content/dam/penfed/blogimages/2021/lc-proven-budgeting-strategies.jpg')",
                }}
                className="text-[white] text-[1.5rem] bg-right bg-cover  h-[220px] w-full "
              ></div>
              <div className="text-center mt-5">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featuredarticles;
