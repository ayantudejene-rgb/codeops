"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function RevenueChart({ data }) {
  const formatETB = (val) => new Intl.NumberFormat("en-ET", { style: "currency", currency: "ETB", maximumFractionDigits: 0 }).format(val);

  return (
    <div style={{ height: 300, marginTop: 20 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="neighbourhood" />
          <YAxis tickFormatter={formatETB} width={90} />
          <Tooltip formatter={(value) => [formatETB(value), "Revenue"]} />
          <Bar dataKey="revenue" fill="#1B4D8E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}