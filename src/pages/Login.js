import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const InitiaState = {
    username: "",
    password: "",
  };
  const [formValue, setFormData] = useState(InitiaState);
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    console.log("Details of user", formValue);
    if (
      (formValue.username == "Hross6") &
      (formValue.password == "Departmental101")
    ) {
      navigate("/Dashboard");
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  const data = [
    { name: "NCUA_logo.svg", url: "" },
    { name: "Norton_logo.png", url: "" },
    { name: "EHL_logo_white.svg", url: "" },
  ];
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md  md:w-[50%] mx-auto">
        <div className="flex justify-center mt-[96px] mb-20">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              className="w-[238px] h-[61.22px]"
            />
          </Link>
        </div>
        <form className="mt-6 ">
          <div className="mb-2">
            <label
              for="username"
              className="block text-sm font-semibold text-gray-800"
            >
              <span className="text-[red]">*</span>Username
            </label>
            <input
              onChange={handleChange}
              name="username"
              value={formValue.username}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              <span className="text-[red]">*</span>Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              value={formValue.password}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full px-4 text-[13px] py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0A223F] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              LOG IN
            </button>
          </div>
        </form>

        <p className="mt-4 text-[13px] text-left text-[#3558D6]">
          <Link to="/" className="cursor-pointer">
            setup your online account or get help signing in.
          </Link>
        </p>
      </div>
      <div className="bg-[#59606e] px-10 pt-10 text-[#ffffff]">
        <div className="text-center text-[10px]">
          <p className=" ">
            This credit union is federally insured by the National Credit Union
            Administration. Rates are current as of March 2023 unless otherwise
            noted and are subject to change.
          </p>
          <h5 className="mt-5 text-[#d0d0d0] underline">Privacy Policy</h5>
        </div>
        <div className="[&>*:nth-child(3)]:order-last flex justify-center items-center mx-auto py-[40px]">
          {data.map((item, key) => (
            <div key={key} className="basis-[20%] mx-auto">
              <img
                src={process.env.PUBLIC_URL + `/${item.name}`}
                className="h-[50px] w-[90px] mx-auto"
                alt="logo"
              />
            </div>
          ))}
          <h2 className="basis-[20%] mx-auto text-[10px] text-[white]">
            ABOUT SSL <span className="block">CERTIFICATES</span>
          </h2>
        </div>
      </div>
      <div className="bg-[#384149] h-[40px] flex justify-center items-center ">
        <p className="text-[#d0d0d0] text-[0.8125rem]">
          ©2023 Pentagon Federal Credit Union
        </p>
      </div>
    </div>
  );
}
