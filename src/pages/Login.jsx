import React, { useState } from "react";
import axios from "axios";
import bgImage from "../assets/LoginBackground.avif";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://backend-project-esou.onrender.com/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);

    toast.success("Login successful!");

    setTimeout(() => {
      window.location.href = "/admin";
    }, 1500);

  } catch (err) {
    toast.error("Invalid email or password");
  }
};

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-center mb-2">
            Admin Login
          </h1>

          <p className="text-center text-gray-300 mb-8">
            Welcome back, sign in to manage your portfolio
          </p>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg outline-none focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg outline-none focus:border-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Login;