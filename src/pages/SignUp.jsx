import React, { useEffect, useState } from "react";
import netflixImg from "../assets/img/netflix.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { notifyError, notifySuccess } from "../Api/toast";
import isOnline from "is-online";
import Loader from "../components/Loader";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, signUp } = UserAuth();
  const [online, setOnline] = useState();

  const checkOnline = async () => {
    setTimeout(async () => {
      setOnline(await isOnline());
    }, 300);
  };

  useEffect(() => {
    checkOnline();
  }, [online]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
      if (!online) {
        notifyError("no internet connection!");
        return;
      }
      notifySuccess("Account created successfully");
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log("er", error.message);
      if (error.code === "auth/weak-password") {
        notifyError("Password should be at least 6 characters");
        setLoading(false);
      } else if (error.code === "auth/email-already-in-use") {
        notifyError("email already exist!");
        setLoading(false);
      } else if (error.code === "auth/invalid-email") {
        notifyError("Invalid email address");
      } else if (
        error.message === "ERR_NETWORK" ||
        error.code === "auth/network-request-failed"
      ) {
        notifyError("Network Error");
        setLoading(false);
      } else {
        notifyError("An unexpected error occurred. Please try again.");
      }
    }
    setLoading(false);
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
          <div className="max-w-[450px] mx-auto h-auto bg-black/75 overflow-auto text-white">
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
                <button
                  className="bg-[#00df9a] py-3 mt-10 font-bold rounded"
                  disabled={loading ? true : false}
                >
                  {loading ? <Loader /> : "Sign Up"}
                </button>
                {!online && (
                  <p className="text-red-600">No internet connection</p>
                )}
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
              <div className="">
                <p className=" py-2">
                  <span className="text-gray-500">
                    Already subscribed to MovieMaze?
                  </span>
                  <Link to="/login" className="hover:underline text-white ml-1">
                    Sign In here.
                  </Link>
                </p>
                <p className="text-gray-500">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <a href="#" className="text-blue-500 ml-1 hover:underline">
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
