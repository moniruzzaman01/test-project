// app/user/page.tsx
import { getAllUsers } from "../queries/user-queries";

export default async function User() {
  const users = await getAllUsers();
  console.log("---------users", users);
  return (
    <div>
      {users.map((user, idx) => (
        <h1 key={idx}>{user?.firstName}</h1>
      ))}
    </div>
  );
}

// Add this line - THIS IS CRUCIAL
export const dynamic = "force-dynamic";
