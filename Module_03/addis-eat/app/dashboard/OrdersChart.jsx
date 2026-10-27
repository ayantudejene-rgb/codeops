"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function OrdersChart({ data }) {
  return (
    <div style={{ height: 300, marginTop: 20 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis width={40} />
          <Tooltip />
          <Line type="monotone" dataKey="orders" stroke="#1B4D8E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}