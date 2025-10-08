"use client";

import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
  // const { session, loading } = useSession();
  const session = authClient.useSession();
  console.log("---------", session);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  // if (loading) return <div>Loading...</div>;
  if (!session) return <div>Please log in</div>;

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
