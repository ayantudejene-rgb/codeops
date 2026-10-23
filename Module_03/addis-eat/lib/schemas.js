import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^(09|07|\+2519|\+2517)\d{8}$/, "Use 09_ or +2519_"),
  dishId: z.string().min(1, "Please select a dish"),
});