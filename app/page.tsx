"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface User {
  id: string;
  email: string;
}

const Page = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: session, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
      } else if (session?.session?.user) {
        setUser({
          id: session.session.user.id,
          email: session.session.user.email,
        });
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Velkommen til Whiteboard</h1>
      {user ? (
        <p>Du er logget inn som: {user.email}</p>
      ) : (
        <p>Ingen bruker er logget inn.</p>
      )}
    </div>
  );
};

export default Page;
