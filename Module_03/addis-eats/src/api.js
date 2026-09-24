export async function fetchDishes(category, signal) {
  const res = await fetch("/dishes.json", { signal });
  
  if (!res.ok) {
    throw new Error(`Could not load the menu (Status: ${res.status})`);
  }
  
  const dishes = await res.json();
  
  if (category && category !== "All") {
    return dishes.filter((d) => d.category === category);
  }
  return dishes;
}