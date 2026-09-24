import { useState, useEffect } from "react";
import { fetchDishes } from "../api";

export function useFetch(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const result = await fetchDishes(category, ctrl.signal);
        setData(result);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    load();

    return () => ctrl.abort();
  }, [category]);

  return { data, loading, error };
}