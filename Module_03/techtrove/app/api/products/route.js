import { db } from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 2;

  let products = db.products;
  if (q) products = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

  const start = (page - 1) * limit;
  const paginated = products.slice(start, start + limit);

  return Response.json({
    data: paginated,
    total: products.length,
    page,
    totalPages: Math.ceil(products.length / limit) || 1,
  });
}