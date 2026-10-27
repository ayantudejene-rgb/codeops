import Link from "next/link";
import { getDetailedOrders } from "@/lib/analytics";

export default async function OrdersTable({ searchParams }) {
  const sort = searchParams.sort || "date";
  const dir = searchParams.dir || "desc";
  const page = Number(searchParams.page) || 1;

  const { rows, total } = await getDetailedOrders({ sort, dir, page, limit: 5 });
  const totalPages = Math.ceil(total / 5);

  if (rows.length === 0) {
    return (
      <div style={{ padding: "40px", border: "1px dashed #ccc", textAlign: "center", marginTop: "20px" }}>
        <h3>No orders yet</h3>
        <p>Once you start receiving orders, they will appear here.</p>
        <Link href="/menu" style={{ color: "blue" }}>View the Menu</Link>
      </div>
    );
  }

  const createSortLink = (column) => {
    const newDir = sort === column && dir === "asc" ? "desc" : "asc";
    return `/dashboard?sort=${column}&dir=${newDir}&page=1`;
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <caption style={{ textAlign: "left", marginBottom: "10px", fontWeight: "bold" }}>
          Your orders, most recent first
        </caption>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc", textAlign: "left" }}>
            <th scope="col" style={{ padding: "10px" }}>
              <Link href={createSortLink("id")}>Order ID</Link>
            </th>
            <th scope="col" style={{ padding: "10px" }}>
              <Link href={createSortLink("customer")}>Customer</Link>
            </th>
            <th scope="col" style={{ padding: "10px" }}>Dish</th>
            <th scope="col" style={{ padding: "10px" }}>
              <Link href={createSortLink("date")}>Date</Link>
            </th>
            <th scope="col" style={{ padding: "10px" }}>Status</th>
            <th scope="col" style={{ padding: "10px", textAlign: "right" }}>
              <Link href={createSortLink("total")}>Total</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((order) => (
            <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px" }}>{order.id}</td>
              <td style={{ padding: "10px" }}>{order.customer}</td>
              <td style={{ padding: "10px" }}>{order.dish}</td>
              <td style={{ padding: "10px" }}>{order.date}</td>
              <td style={{ padding: "10px" }}>{order.status}</td>
              <td style={{ padding: "10px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                {order.total.toLocaleString()} ETB
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
        {page > 1 ? (
          <Link href={`/dashboard?sort=${sort}&dir=${dir}&page=${page - 1}`}>Previous</Link>
        ) : (
          <span style={{ color: "#ccc" }}>Previous</span>
        )}
        <span>Page {page} of {totalPages}</span>
        {page < totalPages ? (
          <Link href={`/dashboard?sort=${sort}&dir=${dir}&page=${page + 1}`}>Next</Link>
        ) : (
          <span style={{ color: "#ccc" }}>Next</span>
        )}
      </div>
    </div>
  );
}