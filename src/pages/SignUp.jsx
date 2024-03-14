import React, { useState } from "react";
import netflixImg from "../assets/img/netflix.jpg";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { notifyError, notifySuccess } from "../Api/toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setText({ ...text, [name]: value });
  //   };
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const check = await signUp(email, password);
      console.log(check);
      // if (error.code === "auth/weak-password") {
      //   notifyError("wrong password");
      //   return;
      // } else {
      notifySuccess("Account created successfully");
      // }
    } catch (error) {
      console.log("er", error.message);
      if (error.code === "auth/weak-password") {
        notifyError("Password should be at least 6 characters");
        return;
      } else {
        notifySuccess("Account created successfully");
      }

      // notifyError(error.message);
    }
  };

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
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-6"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  //   value={text.email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Email"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  //   value={text.password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-[#00df9a] py-3 mt-10 font-bold rounded">
                  Sign Up
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
                    Already subscribed to Moviemaze?
                    <span className="hover:underline text-white ml-1">
                      Sign In here.
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

export default SignUp;
