import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { ReactComponent as Image } from "assets/svg/authBanner.svg";
import { Link } from "react-router-dom";
import Head from "components/Head";

function Login() {
  return (
    <>
      <Head title="Login" desc="Login page" />
      <div className="grid grid-cols-1 space-x-2 md:grid-cols-2 mt-14">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-center">
            Login to Your Account
          </h1>
          <div className="flex flex-col justify-center mt-10 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <button className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white ">
              <FaGoogle size={22} />
              <p className="inline-block pt-1">Login With Google</p>
            </button>
            <button className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white">
              <FaApple size={26} />
              <p className="inline-block pt-1">Login With Apple</p>
            </button>
          </div>
          <p className="my-2 mt-4 text-center text-gray-400">-- OR --</p>
          <form className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Email"
                className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
              />
            </div>
            <div className="flex justify-between">
              <a
                href="/"
                className="inline-block text-gray-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              name="login"
              className="w-full p-2 text-lg rounded-md gradient"
            >
              Login
            </button>
          </form>
          <p className="my-4 text-center text-gray-400">
            Not a member yet ?{" "}
            <Link to="/register" className="text-white underline">
              Register Now
            </Link>
          </p>
        </div>
        <div className="hidden md:flex">
          <Image width="100%" />
        </div>
      </div>
    </>
  );
}

export default Login;
