import { useState, useEffect } from "react";
import { fetchDishById } from "../api";

export function useDish(id) {
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);
    setNotFound(false);

    async function load() {
      try {
        const result = await fetchDishById(id, ctrl.signal);
        if (!result) {
          setNotFound(true);
        } else {
          setDish(result);
        }
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();

    return () => ctrl.abort();
  }, [id]);

  return { dish, loading, error, notFound };
}