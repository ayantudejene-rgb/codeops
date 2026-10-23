import { db } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const dish = db.dishes.find((d) => d.id === id);

  if (!dish) {
    return Response.json(
      { error: "No such dish", fieldErrors: {} },
      { status: 404 }
    );
  }

  return Response.json(dish);
}