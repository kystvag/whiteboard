"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface User {
  id: string;
  email: string;
}

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email || "Ingen e-post funnet",
        });
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Velkommen til Whiteboard</h1>
      {user ? (
        <div className="text-center">
          <p className="mb-4">Du er logget inn som <span className="font-semibold">{user.email}</span></p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logg ut
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">Ingen bruker er logget inn.</p>
          <a
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
          >
            Logg inn
          </a>
        </div>
      )}
    </div>
  );
};

export default HomePage;
