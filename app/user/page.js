import { getAllUsers } from "../queries/user-queries";

export default async function User() {
  const users = await getAllUsers();
  console.log("---------users", users);
  return <div>User</div>;
}
