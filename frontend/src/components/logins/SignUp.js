import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password, confirmPassword);
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
          <form onSubmit={ handleSubmit} className="w-full max-w-md m-auto bg-blue-500 rounded-lg border border-primaryBorder shadow-default py-10 px-16 text-white">
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <input
          required  
          type="text"
          className="block border text-black border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          required  
          type="text"
          className="block border  text-black border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required  
          type="password"
          name="password"
                  placeholder="Password"
                  autoComplete="on"
          className="block text-black border-grey-light w-full p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required  
          type="password"
          className="block text-black border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  autoComplete="on"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green w-full py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
         
        >
          Create Account
        </button>
        <div className="text-grey-dark mt-6 text-center">
          Already have an account?
          <Link
            className="no-underline ml-3 border-b border-blue text-blue"
            to="/login"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
