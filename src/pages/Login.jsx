import React from "react";
import { Link } from "react-router-dom";

function Login() {
  /// submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="mt-12 rounded-lg max-w-lg mx-auto shadow-md p-8 bg-white">
        <h2 className="my-6 text-center text-xl lg:text-4xl text-slate-800 font-bold">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Email
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              type="password"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm">
          New Here?{" "}
          <Link to={"/signup"} className="text-blue-500 hover:text-blue-700">
            Create an Account
          </Link>
        </p>
      </div>
      ;
    </div>
  );
}

export default Login;
