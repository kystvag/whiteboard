"use client";

import { supabase } from "@/utils/supabaseClient";

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        console.error("Error during Google login:", error.message);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error during Google login:", err.message);
      } else {
        console.error("Unknown error during Google login:", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Logg inn</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Logg inn med Google
      </button>
    </div>
  );
};

export default LoginPage;
