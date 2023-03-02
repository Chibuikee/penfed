import { BsHouseDoor } from "react-icons/bs";
import { IoCarOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { MdOutlineSavings } from "react-icons/md";
import { GiBank, GiTakeMyMoney } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineIdentification } from "react-icons/hi";
function Services() {
  const ADdata = [
    {
      name: BsHouseDoor,
      info: "MORTGAGES ",
      url: "#",
    },
    {
      name: IoCarOutline,
      info: "AUTO LOANS",
      url: "#",
    },
    {
      name: GoCreditCard,
      info: "CREDIT CARDS",
      url: "#",
    },
    {
      name: MdOutlineSavings,
      info: " SAVINGS ",
      url: "#",
    },
    {
      name: GiBank,
      info: " HOME EQUITY ",
      url: "#",
    },

    {
      name: TbCertificate,
      info: " CERTIFICATES ",
      url: "#",
    },
    {
      name: TfiWrite,
      info: " CHECKIING ",
      url: "#",
    },
    {
      name: GiTakeMyMoney,
      info: " PERSONAL LOANS ",
      url: "#",
    },
    {
      name: HiOutlineIdentification,
      info: "MEMBERSHIP",
      url: "#",
    },
  ];
  return (
    <section>
      <div>
        <div>
          <div className="grid grid-cols-3 md:grid-cols-4 penfedL:grid-cols-9 md:[&>*:nth-child(9)]:hidden penfedL:[&>*:nth-child(9)]:block ">
            {ADdata.map((item, key) => (
              <div
                key={key}
                className="penfedL:p-[24px] border-[0.3px] border-solid border-[#464545]"
              >
                <item.name size={40} className="mx-auto" />
                <h4 className="mt-5 text-xs tracking-[0.5px] text-center cursor-pointer">
                  {item.info}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
