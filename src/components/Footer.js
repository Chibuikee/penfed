import { IoPaperPlane } from "react-icons/io5";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import hero_deck_mobile_app from "../assets/images/hero-deck-mobile-app-400x400.jpeg";
import mobile_icon_appstorebadge from "../assets/images/mobile_icon_appstorebadge.svg";
import mobile_icon_googleplaybadge from "../assets/images/mobile_icon_googleplaybadge.svg";
function Footer() {
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(data);
  }

  const bottomFooter = [
    { link: "#", title: "Privacy" },
    { link: "#", title: "Security" },
    { link: "#", title: "Disclosures" },
    { link: "#", title: "Fees" },
    { link: "#", title: "Forms" },
    { link: "#", title: "Site Map" },
  ];

  const middleFooter = [
    {
      link: "#",
      title:
        "This credit union is federally insured by the National Credit Union Administration. Rates are current as of February 2023 unless otherwise noted and are subject to change.    ",
    },
  ];
  const leftFooter = [
    { link: "#", title: "Locations" },
    { link: "#", title: "Foundation" },
    { link: "#", title: "Careers" },
    { link: "#", title: "Contact Us" },
    { link: "#", title: "Press Room" },
  ];
  const Social = [
    { link: "#", title: FaFacebookSquare },
    { link: "#", title: FaTwitterSquare },
    { link: "#", title: FaLinkedin },
    { link: "#", title: FaYoutubeSquare },
    { link: "#", title: FaInstagramSquare },
  ];

  return (
    <>
      <section className="bg-[#212529] box-border">
        <div className="px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px] py-12 lg:flex">
          <div className="basis-1/4 px-3">
            <h4 className="text-white mb-2">Subscribe</h4>
            <p className="text-[#98A0AA] text-sm">
              In an ideal world this text wouldnt exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="my-4 relative">
                <input
                  placeholder="Email"
                  className="py-1.5 pl-5 w-full pr-12 bg-[#2e313a]"
                />

                <a className="absolute right-4 top-2 ">
                  <IoPaperPlane size={20} color="#acacac" />
                </a>

                {
                  <p className="text-red-500 text-xs italic">
                    Please input your Email
                  </p>
                }
              </div>
            </form>
          </div>
        </div>
        <img src={hero_deck_mobile_app} className="" alt="professional" />
        <div className="bg-[rgb(10,34,63)] px-2">
          <div className="w-full xs:max-w-[544px] md:max-w-[720px] penfedL:max-w-[960px] lg:max-w-[1200px] mx-auto ">
            <div className="footer-ctn md:grid mx-auto penfedL:flex text-[#c7ccd3]">
              <ul className="leftFooter grid penfedL:block px-2 font-sans pt-10 relative basis-[50%]">
                {leftFooter.map((item, key) => (
                  <li
                    key={key}
                    className=" text-base font-medium text-[#ffffff] penfedL:mb-5"
                  >
                    {item.title}
                  </li>
                ))}
                <div className="w-full h-[2px] bg-[#233953] absolute left-0 bottom-0 penfedL:left-[200px] penfedL:h-full penfedL:w-[2px] "></div>
              </ul>

              <ul className="middleFooter px-2 font-sans py-5  md:mr-[10px]">
                <div className="w-full h-[2px] mb-10 bg-[#233953] md:hidden"></div>
                {middleFooter.map((item, key) => (
                  <li key={key} className="font-[300] text-base mb-5">
                    {item.title}
                  </li>
                ))}
                <li>APY = Annual Percentage Yield </li>
                <li> APR = Annual Percentage Rate</li>
              </ul>
              <ul className="rightFooter px-2 font-sans pt-10 text-[#c7ccd3] relative">
                <div className="w-full h-[2px] md:w-[2px] md:h-[98%] mb-10 bg-[#233953] absolute left-0 top-0"></div>
                <div className="flex flex-nowrap gap-[16px]  md:ml-5">
                  {Social.map((item, key) => (
                    <item.title
                      key={key}
                      size={40}
                      className="bg-[white] text-[rgb(10,34,63)]  rounded-[6px]"
                    />
                  ))}
                </div>
                <div className="flex gap-[16px] md:ml-5">
                  <img
                    className="h-[40px] w-[135px] mt-5"
                    src={mobile_icon_appstorebadge}
                  />
                  <img
                    className="h-[40px] w-[135px] mt-5"
                    src={mobile_icon_googleplaybadge}
                  />
                </div>
                <div className="h-[70px] md:ml-5">
                  <img
                    className="h-[50px] w-[44px] mt-5"
                    src="https://www.penfed.org/content/dam/penfed/general/icons/globalnav/equal-housing-lender--light.svg"
                  />
                </div>
                <h2 className="md:ml-5">Routing #256078446</h2>
              </ul>
            </div>
            <div className="w-full h-[2px] my-5 bg-[#233953]"></div>
            <div className="text-[#c7ccd3] text-[14px]">
              <p className=" px-2   font-medium font-sans ">
                © 2023 Pentagon Federal Credit Union
              </p>
              <div className=" md:flex  justify-between items-center font-sans pb-10 relative max-w-[90%]">
                {bottomFooter.map((item, key) => (
                  <h1 key={key} className="px-2 font-[700] mt-4 ">
                    {item.title}
                  </h1>
                ))}
                <img
                  className="px-2 fixed right-0 bottom-5"
                  src="https://resources.digital-cloud.medallia.com/wdcus/56048/resources/image/1642520523390_mobilefeedbacknavy50px.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
