"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function OrderStatus({ id, initialData }) {
  const { data, error } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: initialData, // No spinner on first paint
    refreshInterval: 5000,     // Poll every 5 seconds
  });

  if (error) return <p>Failed to load order status.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <p><strong>Order ID:</strong> {data.id}</p>
      <p><strong>Status:</strong> {data.status}</p>
      <p><em>(This updates automatically every 5 seconds)</em></p>
    </div>
  );
}