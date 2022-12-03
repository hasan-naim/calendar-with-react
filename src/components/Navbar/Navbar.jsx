import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-2 bg-white sticky shadow-md w-full">
      <div className="container flex justify-between items-center">
        <h2 className="text-xl font-bold  text-slate-700 mr-10">Calendar</h2>
        <div>
          <Link
            to="/login"
            className="bg-blue-500 text-xl font-medium text-white px-4 py-1 rounded hover:bg-transparent hover:text-blue-500 duration-300 border-2 border-blue-500 block"
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
