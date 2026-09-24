export async function fetchDishes(signal) {
  const res = await fetch("/dishes.json", { signal });
  
  // Exercise 4: Check res.ok and throw a clear message
  if (!res.ok) {
    throw new Error(`Could not load the menu (Status: ${res.status})`);
  }
  
  return res.json();
}