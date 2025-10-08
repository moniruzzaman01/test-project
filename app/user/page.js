// app/user/page.tsx
import { getAllUsers } from "../queries/user-queries";

export default async function User() {
  const users = await getAllUsers();
  console.log("---------users", users);
  return <div>User</div>;
}

// Add this line - THIS IS CRUCIAL
export const dynamic = "force-dynamic";
