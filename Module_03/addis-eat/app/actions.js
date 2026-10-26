"use server";

import { db } from "@/lib/db";
import { orderSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";

// 1. placeOrder (Day 39)
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

  const newOrder = {
    id: `ord_${Math.floor(Math.random() * 1000)}`,
    ...result.data,
    status: "pending",
  };
  
  db.orders.push(newOrder);

  revalidatePath("/orders");

  return {
    success: true,
    message: `Order ${newOrder.id} placed successfully!`,
    fieldErrors: {},
  };
}

// 2. cancelOrder (Day 42 Update)
export async function cancelOrder(orderId) {
  // Authentication
  const user = await getSession();
  if (!user) {
    throw new Error("401 Unauthorized: Not signed in");
  }

  const order = db.orders.find((o) => o.id === orderId);
  if (!order) {
    throw new Error("404 Not Found: Order does not exist");
  }

  // Authorisation
  if (order.userId !== user.id) {
    throw new Error("403 Forbidden: Not yours");
  }

  order.status = "cancelled";
  revalidatePath("/orders");
}