import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";
function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [fetch, setFetch] = useState(false);
  const handleLogOut = async () => {
    try {
      const res = await logOut();
      setFetch(!fetch);
      toast.success("You are successfully loged out");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <nav className="py-2 bg-white sticky shadow-md w-full">
      <div className="container flex justify-between items-center">
        <Link
          to={"/"}
          className="text-xl lg:text-3xl font-bold  text-slate-700 mr-10"
        >
          Calendar
        </Link>
        <div>
          {user?.email ? (
            <>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold uppercase "></div>
                <button
                  onClick={handleLogOut}
                  className="hover:bg-blue-700 text-xl font-medium hover:text-white px-4 py-1 rounded hover:bg-transparent text-blue-700 duration-300 border-2 border-blue-700 block"
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-700 text-xl font-medium text-white px-4 py-1 rounded hover:bg-transparent hover:text-blue-700 duration-300 border-2 border-blue-700 block"
            >
              {" "}
              Login{" "}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
