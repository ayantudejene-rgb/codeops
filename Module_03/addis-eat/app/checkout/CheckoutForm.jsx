"use client";

import { useActionState } from "react";
import { placeOrder } from "../actions";
import { db } from "@/lib/db"; // Only used here to render the select dropdown

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
        <label>Select Dish:</label>
        <select name="dishId">
          <option value="">-- Choose --</option>
          {db.dishes.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        {state?.fieldErrors?.dishId && <p style={{ color: "red" }}>{state.fieldErrors.dishId[0]}</p>}
      </div>

      <button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Order"}
      </button>

      {state?.success && <p style={{ color: "green" }}>{state.message}</p>}
      {state?.error && !state.fieldErrors && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}