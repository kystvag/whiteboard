"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Velkommen til Whiteboard!</h1>
      {user ? (
        <p>Du er logget inn som {user.email}</p>
      ) : (
        <p>Du er ikke logget inn.</p>
      )}
    </div>
  );
}
