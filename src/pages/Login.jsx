import React from "react";
import netflixImg from "../assets/img/netflix.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={netflixImg}
          alt="/"
        />
        <div className="bg-black/60 fixed w-full h-full top-0 left-0"></div>

        <div className="fixed w-full px-4 py-24 z-50 overflow-auto">
          <div className="max-w-[450px] mx-auto h-[600px] bg-black/75 text-white">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="w-full flex flex-col py-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-[#00df9a] py-3 mt-10 font-bold rounded">
                  Sign In
                </button>
                <div className="flex justify-between py-4">
                  <p className="text-gray-400 flex items-center">
                    <input
                      type="checkbox"
                      className="accent-[#00df9a] w-4 h-4 mr-1 cursor-pointer"
                    />
                    Remember me
                  </p>
                  <a href="#" className="text-gray-400 hover:underline">
                    Need help?
                  </a>
                </div>
              </form>
              <div className="my-6">
                <Link to="/signup">
                  <p className="text-gray-400 text-lg">
                    New to Moviemaze?
                    <span className="hover:underline text-white ml-1">
                      Sign up now.
                    </span>
                  </p>
                </Link>
                <p className="text-gray-400">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <a href="#" className="text-blue-700 ml-1 hover:underline">
                    learn more.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
