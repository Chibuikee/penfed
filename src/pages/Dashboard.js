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
      </div>

      <div class="relative overflow-x-auto">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                02/05/2020
              </th>
              <td class="px-6 py-4">eternal-transfer-612221-from-NNPC-</td>
              <td class="px-6 py-4">$1,850,988</td>
              <td class="px-6 py-4">Credit</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                09/09/2020
              </th>
              <td class="px-6 py-4">Transfer-to-Femi-Otedola/2336713392</td>
              <td class="px-6 py-4">$1,150,980</td>
              <td class="px-6 py-4">Debit</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                22/03/2020
              </th>
              <td class="px-6 py-4">
                eternal-transfer-612591-from-Dangote-PLc
              </td>
              <td class="px-6 py-4">$2,550,908</td>
              <td class="px-6 py-4">Credit</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                22/03/2021
              </th>
              <td class="px-6 py-4">Transfer-to-Oli-Chukwu/2336718954</td>
              <td class="px-6 py-4">$3,850,188</td>
              <td class="px-6 py-4">Debit</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                22/03/2022
              </th>
              <td class="px-6 py-4">eternal-transfer-612001-from-Tesla-LLC</td>
              <td class="px-6 py-4">$4,859,988</td>
              <td class="px-6 py-4">Credit</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                22/03/2023
              </th>
              <td class="px-6 py-4">
                eternal-transfer-612591-from-Helen-Ross-LLC
              </td>
              <td class="px-6 py-4">$6,850,988</td>
              <td class="px-6 py-4">Credit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
