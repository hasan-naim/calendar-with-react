import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-2 bg-white sticky shadow-md w-full">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold  text-slate-700 mr-10">
          Calendar
        </Link>
        <div>
          <Link
            to="/login"
            className="bg-blue-700 text-xl font-medium text-white px-4 py-1 rounded hover:bg-transparent hover:text-blue-700 duration-300 border-2 border-blue-700 block"
          >
            {" "}
            Login{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
