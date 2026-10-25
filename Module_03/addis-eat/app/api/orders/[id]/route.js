import { db } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const order = db.orders.find((o) => o.id === id);

  if (!order) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  return Response.json(order);
}