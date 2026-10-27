"use client";

import { downloadCSV } from "@/lib/csv";

export default function ExportCSVButton({ orders }) {
  return (
    <button
      onClick={() => downloadCSV(orders)}
      style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
    >
      Export Orders to CSV
    </button>
  );
}