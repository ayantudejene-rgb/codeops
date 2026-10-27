import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getRevenueByNeighbourhood, getOrdersOverTime } from "@/lib/analytics";
import RevenueChart from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import OrdersTable from "./OrdersTable";

export const metadata = { title: "Staff Dashboard" };

export default async function DashboardPage({ searchParams }) {
  const user = await getSession();
  if (!user) redirect("/signin?next=/dashboard");
  if (user.role !== "staff") throw new Error("403 Forbidden");

  const revenueData = await getRevenueByNeighbourhood();
  const ordersData = await getOrdersOverTime();

  return (
    <main>
      <h1>Staff Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "30px" }}>
        <section>
          <h2>Revenue by Neighbourhood</h2>
          <RevenueChart data={revenueData} />
          <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
                <th scope="col">Neighbourhood</th>
                <th scope="col" style={{ textAlign: "right" }}>Revenue (ETB)</th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((row) => (
                <tr key={row.neighbourhood}>
                  <td>{row.neighbourhood}</td>
                  <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{row.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Orders over Time (This Week)</h2>
          <OrdersChart data={ordersData} />
          <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
                <th scope="col">Day</th>
                <th scope="col" style={{ textAlign: "right" }}>Orders</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((row) => (
                <tr key={row.date}>
                  <td>{row.date}</td>
                  <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{row.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section style={{ marginTop: "50px" }}>
        <h2>Recent Orders</h2>
        <OrdersTable searchParams={searchParams} />
      </section>
    </main>
  );
}