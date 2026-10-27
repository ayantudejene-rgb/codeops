"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function OrderStatus({ id, initialData }) {
  const { data, error } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: initialData,
    refreshInterval: 5000,
  });

  if (error) return <p>Failed to load status.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <p><strong>Order ID:</strong> {data.id}</p>
      <p><strong>Status:</strong> {data.status}</p>
    </div>
  );
}