import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/admin");
  if (user.role !== "admin") throw new Error("403 Forbidden");

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Only admins can see this screen.</p>
    </main>
  );
}