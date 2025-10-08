"use client";

import { authClient } from "@/lib/auth-client";

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      // This will redirect to Google OAuth page
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3000/dashboard", // Add this callback URL
      });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "http://localhost:3000/dashboard",
      });
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { data, error } = await authClient.signIn.email({
      email: event.target.email.value, // required
      password: "Shakib-15289", // required
      rememberMe: true,
      // callbackURL: "http://localhost:3000/dashboard",
    });
    console.log("-------email login", data, error);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { data, error } = await authClient.signUp.email({
      firstName: "John", // required
      lastName: "Doe", // required
      email: event.target.email.value, // required
      password: "Shakib-15289", // required
      image: "https://example.com/image.png",
      phone: 203984209,
      role: "janina",
      callbackURL: "http://localhost:3000/user",
    });
    console.log("-------email register", data, error);
  };

  return (
    <div className="flex justify-center h-screen items-center gap-4">
      <button
        onClick={handleGoogleLogin}
        className="cursor-pointer bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-white"
      >
        Login with Google
      </button>

      <form onSubmit={handleRegister} action="">
        <input type="text" name="email" />
        <button className="cursor-pointer bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-white">
          register
        </button>
      </form>
      <form onSubmit={handleLogin} action="">
        <input type="text" name="email" />
        <button className="cursor-pointer bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-white">
          Login
        </button>
      </form>

      <button
        onClick={handleGithubLogin}
        className="cursor-pointer bg-gray-800 hover:bg-gray-900 rounded px-4 py-2 text-white"
      >
        Login with GitHub
      </button>
    </div>
  );
}
