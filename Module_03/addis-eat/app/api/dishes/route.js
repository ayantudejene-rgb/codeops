import { db } from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 2; // Small limit to easily test pagination

  let dishes = db.dishes;

  // 1. Handle Search
  if (q) {
    dishes = dishes.filter((d) => 
      d.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // 2. Handle Pagination
  const start = (page - 1) * limit;
  const paginated = dishes.slice(start, start + limit);

  return Response.json({
    data: paginated,
    total: dishes.length,
    page,
    totalPages: Math.ceil(dishes.length / limit) || 1,
  });
}