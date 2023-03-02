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
    navigate("/");
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className="w-[238px] h-[61.22px]"
          />
        </div>
        <form className="mt-6">
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
    </div>
  );
}
