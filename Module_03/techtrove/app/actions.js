"use server";

import { db } from "@/lib/db";
import { orderSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";

export async function placeOrder(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    productId: formData.get("productId"),
  };
  const result = orderSchema.safeParse(rawData);

  if (!result.success) {
    return { error: "Validation failed", fieldErrors: result.error.flatten().fieldErrors, success: false };
  }

  const user = await getSession();
  const newOrder = {
    id: `ord_${Math.floor(Math.random() * 10000)}`,
    userId: user ? user.id : "guest",
    ...result.data,
    status: "processing",
  };

  db.orders.push(newOrder);
  revalidatePath("/orders");

  return { success: true, message: `Order ${newOrder.id} placed successfully!`, fieldErrors: {} };
}

export async function cancelOrder(orderId) {
  const user = await getSession();
  if (!user) throw new Error("401 Unauthorized");

  const order = db.orders.find((o) => o.id === orderId);
  if (!order) throw new Error("404 Not Found");
  if (order.userId !== user.id) throw new Error("403 Forbidden");

  order.status = "cancelled";
  revalidatePath("/orders");
}