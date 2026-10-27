import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";

export const metadata = { title: "Orders" };

export default async function OrdersPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/orders");

  const userOrders = db.orders.filter((o) => o.userId === user.id);

  return (
    <main>
      <h1>Your Orders</h1>
      {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {userOrders.map((order) => (
            <li key={order.id}>
              <Link href={`/orders/${order.id}`}>{order.id}</Link> - {order.name} ({order.status})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}