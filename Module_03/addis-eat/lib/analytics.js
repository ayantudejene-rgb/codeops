export async function getRevenueByNeighbourhood() {
  return [
    { neighbourhood: "Bole", revenue: 14500 },
    { neighbourhood: "Kazanchis", revenue: 8200 },
    { neighbourhood: "Piassa", revenue: 5000 },
    { neighbourhood: "Sarbet", revenue: 3200 },
  ];
}

export async function getOrdersOverTime() {
  return [
    { date: "Mon", orders: 12 },
    { date: "Tue", orders: 19 },
    { date: "Wed", orders: 15 },
    { date: "Thu", orders: 22 },
    { date: "Fri", orders: 30 },
    { date: "Sat", orders: 45 },
    { date: "Sun", orders: 38 },
  ];
}

export async function getDetailedOrders({ sort = "date", dir = "desc", page = 1, limit = 5 }) {
  const mockOrders = [
    { id: "ord_101", customer: "Almaz", dish: "Doro Wat", total: 220, status: "Completed", date: "2026-10-24" },
    { id: "ord_102", customer: "Dawit", dish: "Kitfo", total: 180, status: "Processing", date: "2026-10-25" },
    { id: "ord_103", customer: "Tigist", dish: "Shiro", total: 120, status: "Completed", date: "2026-10-25" },
    { id: "ord_104", customer: "Bereket", dish: "Kitfo", total: 180, status: "Cancelled", date: "2026-10-26" },
    { id: "ord_105", customer: "Sara", dish: "Doro Wat", total: 440, status: "Processing", date: "2026-10-26" },
    { id: "ord_106", customer: "Yonas", dish: "Tibs", total: 320, status: "Completed", date: "2026-10-27" },
  ];

  let sorted = [...mockOrders];
  sorted.sort((a, b) => {
    if (sort === "total") return dir === "asc" ? a.total - b.total : b.total - a.total;
    if (sort === "customer") return dir === "asc" ? a.customer.localeCompare(b.customer) : b.customer.localeCompare(a.customer);
    return dir === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
  });

  const start = (page - 1) * limit;
  const paginated = sorted.slice(start, start + limit);

  return { rows: paginated, total: mockOrders.length };
}