import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-blue-500 rounded-lg border border-primaryBorder shadow-default py-10 px-16 text-white">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`text-black w-full p-2 text-primary border rounded-md outline-none text-base transition duration-150 ease-in-out mb-4`}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="on"
              className={`w-full  text-black p-2 text-primary border rounded-md outline-none text-base transition duration-150 ease-in-out mb-4`}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              required
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`w-full bg-green py-2 px-4 text-base text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-center">
            Create a new account
            <Link
              className="no-underline ml-3 border-b border-blue text-blue"
              to="/signup"
            >
              Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
