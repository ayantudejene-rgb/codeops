import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function KitchenPage() {
  const user = await getSession();
  
  if (!user) redirect("/signin?next=/kitchen");
  
  // Authorisation: We know who they are, but are they allowed?
  if (user.role !== "staff") {
    throw new Error("403 Forbidden: Not authorized");
  }

  return (
    <main>
      <h1>Kitchen Dashboard</h1>
      <p>Only staff members can see this screen.</p>
    </main>
  );
}