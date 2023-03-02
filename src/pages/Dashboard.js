import { GoCreditCard } from "react-icons/go";
import { MdOutlineSavings } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import { Link } from "react-router-dom";
function Dashboard() {
  const ADdata = [
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
      name: HiOutlineIdentification,
      info: "MEMBERSHIP",
      url: "#",
    },
  ];

  return (
    <section className="pb-10 ">
      <div className="p-[27px] flex justify-between mr-2">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className="w-[140px] h-[35.5px]"
          />
        </Link>
        <Link to="/Login">
          <button className="bg-[#047dba] cursor-pointer py-[0.375rem] px-[1.375rem] text-base font-[500] border rounded-[6px] border-solid border-[#398007]">
            Log Out
          </button>
        </Link>
      </div>
      <div>
        <div className="relative saturate-[0] bg-[url('https://www.penfed.org/content/dam/penfed/general/img/2023/homepage/deposits-homepage-tiles-16-533x756.jpeg')_] bg-center bg-cover w-[100%] h-[120px]">
          <Link to="/">
            <h1 className="absolute top-5 text-xl mmd:text-3xl font-semibold text-white px-[28px]">
              DASHBOARD
            </h1>
          </Link>
        </div>

        <div className="grid p-10 xxs:grid-cols-2 md:grid-cols-3">
          <h2 className="mb-5">
            <span className="font-bold mr-2">Full Name:</span>
            <span className="text-xs">Bexley Ross</span>
          </h2>
          <h2 className="mb-5">
            <span className="font-bold mr-2">Address:</span>
            <span className="text-xs">
              217105 105th Avenue SE, Kent, WA 98030 Ross
            </span>
          </h2>
          <h2 className="mb-5">
            <span className="font-bold mr-2">Account no:</span>
            <span className="text-xs">***8921</span>
          </h2>
          <h2 className="mb-5">
            <span className="font-bold mr-2">Acc Balance:</span>
            <span className="text-xs">1,850,988</span>
          </h2>
        </div>
        <div className="bg-[#f0f9ff]">
          <div className="grid grid-cols-3 md:grid-cols-4 px-5 ">
            {ADdata.map((item, key) => (
              <div
                key={key}
                className=" border-[0.3px] border-solid border-[#464545] py-4 px-2"
              >
                <item.name size={40} className="mx-auto" />
                <h4 className="mt-5 text-xs tracking-[0.5px] text-center cursor-pointer ">
                  {item.info}
                </h4>
              </div>
            ))}
          </div>
          <div className="px-5">
            <h2 className="font-bold mr-2">
              Transaction history: From
              <span> Jan 2018</span>-<span>Dec 2020</span>
            </h2>
            <h3 className="text-xs">
              eternal-transfer-612591-from-Helen-Ross-LLC
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
