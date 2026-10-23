"use server";

import { db } from "@/lib/db";
import { orderSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function placeOrder(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    dishId: formData.get("dishId"),
  };

  const result = orderSchema.safeParse(rawData);

  if (!result.success) {
    return {
      error: "Validation failed",
      fieldErrors: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Simulate writing to the database
  const newOrder = {
    id: `ord_${Math.floor(Math.random() * 1000)}`,
    ...result.data,
    status: "pending",
  };
  db.orders.push(newOrder);

  // Tell Next.js to refresh any cached pages that show orders
  revalidatePath("/orders");

  return {
    success: true,
    message: `Order ${newOrder.id} placed successfully!`,
    fieldErrors: {},
  };
}
import { cookies } from "next/headers";

export async function cancelOrder(orderId) {
  // 1. Check the session
  const cookieStore = await cookies();
  const session = cookieStore.get("userId"); // Mocking a session cookie

  if (!session) {
    throw new Error("Not signed in");
  }

  // 2. Find the order and check ownership
  const order = db.orders.find((o) => o.id === orderId);
  
  if (!order) {
    throw new Error("Order not found");
  }

  // Assuming order has a userId field (mocking it here for the exercise)
  // In a real DB: if (order.userId !== session.value) throw new Error("Not yours");
  
  // 3. Write to DB
  order.status = "cancelled";
  revalidatePath("/orders");
}