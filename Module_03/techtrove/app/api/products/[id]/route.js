import { db } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  const product = db.products.find((p) => p.id === id);

  if (!product) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json(product);
}