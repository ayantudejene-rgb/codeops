import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";
import ExportCSVButton from "@/components/ExportCSVButton";

export const metadata = { title: "Your Orders" };

export default async function OrdersPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/orders");

  const userOrders = db.orders.filter((o) => o.userId === user.id);

  return (
    <main>
      <h1>Your Orders</h1>
      <ExportCSVButton orders={userOrders} />
      
      {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {userOrders.map((order) => (
            <li key={order.id}>
              <Link href={`/tracking/${order.id}`}>{order.id}</Link> - {order.name} ({order.status})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}