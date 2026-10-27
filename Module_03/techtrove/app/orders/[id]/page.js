import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import OrderStatus from "./OrderStatus";

export const metadata = { title: "Order Status" };

export default async function OrderPage({ params }) {
  const { id } = await params;
  const order = db.orders.find((o) => o.id === id);
  if (!order) notFound();

  return (
    <main>
      <h1>Order Status</h1>
      <OrderStatus id={id} initialData={order} />
    </main>
  );
}