"use client";

import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/Components/Auth";
import { signInWithGoogle, signUpWithEmail } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google Sign-in error:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-8 px-8 sm:px-6 lg:px-8 rounded-lg overflow-hidden shadow-lg">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 px-8">
            Sign up to Summarist
          </h2>
        </div>
        <div className="flex items-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="w-8 bg-white rounded-md absolute transform translate-x-0.5 z-10"
            alt=""
          />
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign up with Google
          </button>
        </div>

        <div className="relative flex justify-center items-center text-sm">
            <div className="h-[1px] w-[40%] bg-slate-500 opacity-40"></div>
          <span className="px-6 text-gray-500">Or</span>
            <div className="h-[1px] w-[40%] bg-slate-500 opacity-40"></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>

          <div></div>
        </form>
      </div>
    </div>
  );
}
