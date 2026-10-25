import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function OrdersPage() {
  const user = await getSession();
  
  // Page-level check
  if (!user) redirect("/signin?next=/orders");

  // Scope the query to the session ID
  const userOrders = db.orders.filter((o) => o.userId === user.id);

  return (
    <main>
      <h1>Your Orders</h1>
      {userOrders.length === 0 ? (
        <p>No orders found for {user.name}.</p>
      ) : (
        <ul>
          {userOrders.map((order) => (
            <li key={order.id}>
              {order.id} - {order.name} ({order.status})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}