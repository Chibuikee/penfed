import { GoCreditCard } from "react-icons/go";
import { MdOutlineSavings } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import { Link } from "react-router-dom";
import { penfedTransactionData } from "../components/navBar/navdata";
import { useState } from "react";
import styles from "./styles.module.css";
function Dashboard() {
  const [display, setDisplay] = useState(false);
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
    <section className={["pb-10", styles.Hide].join(" ")}>
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
              ACCOUNTS
            </h1>
          </Link>
        </div>
        <div
          className={`px-[5px]  s:px-[30px] ${
            display ? "hidden" : "block"
          } bg-[#EEF1F8] relative w-[100%] `}
        >
          <div className="flex justify-between  py-[20px]">
            <div>
              <h2 className="font-semibold text-[14px] text-[#292B2F]">
                Investment Savings
              </h2>
              <p className="text-[#555C68] text-[12px]">***8921</p>
            </div>
            <div>
              <h2 className="font-semibold text-[14px] text-[#292B2F]">
                $1,850,988
              </h2>
              <p className="text-[#555C68] text-[14px]">Available balance</p>
            </div>
            <img
              className="absolute top-[30px] cursor-pointer md:right-[30px] right-[2px]"
              src="/down.svg"
              alt="img"
              onClick={() => setDisplay(true)}
            />
          </div>
          <div
            className={[
              styles.border,
              "flex justify-between py-[20px]  text-[14px] ",
            ].join(" ")}
          >
            <div>
              <h2 className="font-semibold text-[#292B2F]">
                Total Access Checkings
              </h2>
              <p className="text-[#555C68] text-[12px]">***2421</p>
            </div>

            <div>
              <p className="font-semibold text-[#292B2F]">$0.00</p>
              <p className="text-[#555C68]">Available balance</p>
            </div>
          </div>
          <div
            className={[
              "flex justify-between pb-[20px] py-[20px] text-[14px] ",
            ].join(" ")}
          >
            <div>
              <h2 className="font-semibold text-[14px]  text-[#292B2F]">
                Complete Access Checkings
              </h2>
              <p className="text-[#555C68] text-[12px]">***4660</p>
            </div>

            <div>
              <p className="font-semibold text-[#292B2F]">$0.00</p>
              <p className="text-[#555C68]">Available balance</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            display ? "block" : "hidden"
          }  grid py-10 px-[6px] xxs:grid-cols-2 md:grid-cols-3 relative`}
        >
          <img
            className="absolute top-[20px] md:top-[70px] cursor-pointer  md:right-[30px] right-[10px]"
            onClick={() => setDisplay(false)}
            src="/up.svg"
            alt="img"
          />
          <h2 className={[styles.Seperate, "text-[14px] mb-5"].join(" ")}>
            <span className="font-medium mr-2 w-[25%]">Full Name</span>
            <span className={styles.Border}></span>
            <span className="w-[25%] font-bold text-right">Helen Ross LLC</span>
          </h2>
          {/* <h2 className="mb-5">
            <span className="font-bold mr-2">Address:</span>
            <span className="">
              217105 105th Avenue SE, Kent, WA 98030 Ross
            </span>
          </h2> */}
          <h2 className={[styles.Seperate, "text-[14px] mb-5"].join(" ")}>
            <span className="font-medium mr-2 w-[25%]">Account no</span>
            <span className={styles.Border}></span>
            <span className="w-[25%] font-bold text-right">456718921</span>
          </h2>
          <h2 className={[styles.Seperate, "text-[14px] mb-5"].join(" ")}>
            <span className="font-medium mr-2 w-[25%]">Avaliable Balance</span>
            <span className={styles.Border}></span>
            <span className="w-[25%] font-bold text-right text-[#16a34a]">$1,850,988</span>
          </h2>
        </div>
      </div>

      <div class={`${display ? "block" : "hidden"} relative overflow-x-scroll`}>
        <h1 className="font-semibold text-[20px] p-[10px]  text-[#292B2F]">
          Transaction History
        </h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Narration
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                type
              </th>
            </tr>
          </thead>
          <tbody>
            {penfedTransactionData.map((item, key) => (
              <tr
                key={key}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.date}
                </th>
                <td class="px-6 py-4">{item.narration}</td>
                <td class="px-6 py-4">{item.amount}</td>
                <td class="px-6 py-4">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
