"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { fetcher } from "@/lib/fetcher";
import ProductList from "@/components/ProductList";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export default function ProductCatalog({ initialData }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 300);
  const page = parseInt(searchParams.get("page") || "1", 10);

  const searchKey = debouncedTerm ? `/api/products?q=${debouncedTerm}` : null;
  const { data: searchResults } = useSWR(searchKey, fetcher, { keepPreviousData: true });

  const pageKey = !debouncedTerm ? `/api/products?page=${page}` : null;
  const { data: pageResults } = useSWR(pageKey, fetcher, {
    fallbackData: page === 1 ? initialData : undefined,
    keepPreviousData: true,
  });

  const displayData = debouncedTerm ? searchResults?.data : pageResults?.data;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      {displayData ? <ProductList products={displayData} /> : <p>Loading...</p>}

      {!debouncedTerm && pageResults && (
        <div style={{ marginTop: "20px" }}>
          <button disabled={page <= 1} onClick={() => router.push(`${pathname}?page=${page - 1}`)}>
            Previous
          </button>
          <span style={{ margin: "0 10px" }}>Page {pageResults.page} of {pageResults.totalPages}</span>
          <button disabled={page >= pageResults.totalPages} onClick={() => router.push(`${pathname}?page=${page + 1}`)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}