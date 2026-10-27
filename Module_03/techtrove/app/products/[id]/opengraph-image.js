import { ImageResponse } from "next/og";
import { db } from "@/lib/db";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { id } = await params;
  const product = db.products.find((p) => p.id === id);

  return new ImageResponse(
    (
      <div style={{ fontSize: 128, background: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {product ? `${product.name} - $${product.price}` : "Product not found"}
      </div>
    ),
    { ...size }
  );
}