"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

interface User {
  id: string;
  email: string;
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: session } = await supabase.auth.getSession();

      if (session?.session?.user) {
        const userId = session.session.user.id || ""; // Sjekk for fallback
        const userEmail = session.session.user.email || ""; // Sjekk for fallback

        if (userId && userEmail) {
          setUser({
            id: userId,
            email: userEmail,
          });
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Velkommen til Whiteboard</h1>
      {user ? (
        <p>
          Du er logget inn som: <strong>{user.email}</strong>
        </p>
      ) : (
        <p>Ingen bruker er logget inn.</p>
      )}
    </div>
  );
};

export default Home;
