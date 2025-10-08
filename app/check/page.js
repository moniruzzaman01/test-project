// "use client";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";

export default async function Check() {
  //   const user = authClient.useSession();
  const session = await auth.api.getSession({
    headers: {
      cookie: headers().get("cookie") || "",
    },
  });
  console.log("--------", session);
  return <div>Check</div>;
}
