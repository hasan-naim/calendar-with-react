import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";

function SignUp() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();
  /// submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setBtnState(true);
    try {
      const { user } = await signIn(email, pass);
      toast.success("You are successfully Signd in!");
      navigate("/");
      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      setBtnState(false);
    }

    console.log(email, pass);
  };
  return (
    <div>
      <div className="mt-12 rounded-lg max-w-lg mx-auto shadow-md p-8 bg-white">
        <h2 className="my-6 text-center text-xl lg:text-4xl text-slate-800 font-bold">
          Sign Up
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
              type="email"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm">
          Have an Account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
      ;
    </div>
  );
}

export default SignUp;
