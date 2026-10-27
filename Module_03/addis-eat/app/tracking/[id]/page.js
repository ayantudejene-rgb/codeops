import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import TrackingClient from "./TrackingClient";

export const metadata = { title: "Track Delivery" };

export default async function TrackingPage({ params }) {
  const { id } = await params;
  const order = db.orders.find((o) => o.id === id);

  if (!order) notFound();

  return (
    <main>
      <h1>Track Delivery</h1>
      <TrackingClient id={id} initialStatus={order.status} />
    </main>
  );
}