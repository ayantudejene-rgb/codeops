import { db } from "@/lib/db";
import { orderSchema } from "@/lib/schemas";

export async function POST(request) {
  try {
    const body = await request.json();
    const result = orderSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { 
          error: "Validation failed", 
          fieldErrors: result.error.flatten().fieldErrors 
        },
        { status: 422 }
      );
    }

    const newOrder = {
      id: `ord_${Math.floor(Math.random() * 1000)}`,
      ...result.data,
      status: "pending",
    };

    db.orders.push(newOrder);

    return Response.json(newOrder, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Internal Server Error", fieldErrors: {} },
      { status: 500 }
    );
  }
}