import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";

function Login() {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();
  /// submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setBtnState(true);
    try {
      const { user } = await logIn(email, pass);
      toast.success("You are successfully loged in!");
      navigate("/");
      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      setBtnState(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleLogin();
      toast.success("You are successfully loged in!");
      navigate("/");
      setBtnState(false);
    } catch (err) {
      toast.error(err.message);
      setBtnState(false);
    }
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
        <button
          type="button"
          onClick={handleGoogleLogin}
          class="text-white bg-green-600 flex items-center justify-center w-full rounded-md py-2 mt-3 hover:bg-green-700 hvoer:text-gray-100 duration-300 border-2 border-green-600 "
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
      ;
    </div>
  );
}

export default Login;
