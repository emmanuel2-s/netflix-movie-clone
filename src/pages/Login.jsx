import React, { useEffect, useState } from "react";
import netflixImg from "../assets/img/netflix.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import isOnline from "is-online";
import { notifyError, notifySuccess } from "../Api/toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState();
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const checkOnline = async () => {
    setTimeout(async () => {
      setOnline(await isOnline());
    });
  };

  useEffect(() => {
    checkOnline();
  }, [online]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "" && password === "") {
        notifyError("all inputs must be filled");
        return;
      }
      await logIn(email, password);
      navigate("/");
      notifySuccess("Login successful");
    } catch (error) {
      setLoading(false);
      console.log("ERR", error);
      if (error.code === "auth/invalid-login-credentials") {
        notifyError("Invalid Credentials");
      } else if (error.code === "auth/missing-password") {
        notifyError("missing password");
      } else if (error.code === "auth/invalid-email") {
        notifyError("invalid email");
      }
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
          <div className="max-w-[450px] mx-auto h-auto bg-black/75 text-white">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-6"
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="p-3 my-2 bg-gray-700 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Password"
                  className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-[#00df9a] py-3 mt-10 font-bold rounded">
                  {online === undefined
                    ? " checking for internet connection"
                    : loading
                    ? "Login In"
                    : "Login"}
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
                <p className="py-2">
                  <span className="text-gray-500">New to MovieMaze?</span>
                  <Link
                    to="/signup"
                    className="hover:underline text-white ml-1"
                  >
                    Sign up now.
                  </Link>
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
