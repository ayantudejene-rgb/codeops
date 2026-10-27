"use client";

import { useActionState } from "react";
import { placeOrder } from "../actions";
import { db } from "@/lib/db";

export default function CheckoutForm() {
  const [state, formAction, pending] = useActionState(placeOrder, null);

  return (
    <form action={formAction}>
      <div>
        <label>Name:</label>
        <input name="name" />
        {state?.fieldErrors?.name && <p style={{ color: "red" }}>{state.fieldErrors.name[0]}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input name="phone" />
        {state?.fieldErrors?.phone && <p style={{ color: "red" }}>{state.fieldErrors.phone[0]}</p>}
      </div>
      <div>
        <label>Product:</label>
        <select name="productId">
          <option value="">-- Choose --</option>
          {db.products.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        {state?.fieldErrors?.productId && <p style={{ color: "red" }}>{state.fieldErrors.productId[0]}</p>}
      </div>
      <button type="submit" disabled={pending}>
        {pending ? "Processing..." : "Place Order"}
      </button>
      {state?.success && <p style={{ color: "green" }}>{state.message}</p>}
    </form>
  );
}