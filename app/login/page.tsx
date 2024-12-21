"use client";

import { supabase } from "@/utils/supabaseClient";

const Login = () => {
  const handleEmailLogin = async (email: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("En innloggingslenke er sendt til e-posten din.");
    } catch (err: any) {
      console.error("Error during login:", err.message);
    }
  };

  const handleProviderLogin = async (provider: string) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
    } catch (err: any) {
      console.error(`Error during ${provider} login:`, err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Logg inn</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-post
          </label>
          <input
            type="email"
            id="email"
            placeholder="Skriv inn e-posten din"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={() => handleEmailLogin(document.getElementById("email")?.value || "")}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
        >
          Logg inn med e-post
        </button>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => handleProviderLogin("google")}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 w-1/2 mr-2"
          >
            Google
          </button>
          <button
            onClick={() => handleProviderLogin("github")}
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 w-1/2"
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
