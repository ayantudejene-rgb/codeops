import { useFetch } from "../hooks/useFetch";

export default function TotalDishes() {
  const { data, loading, error } = useFetch("All");

  if (loading) return <span>...</span>;
  if (error) return <span>Error</span>;

  return <span>Total dishes available: {data.length}</span>;
}