import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { validate } from "../utils/validate";
import { placeOrder } from "../utils/placeOrder";

const AREAS = ["Bole", "Kazanchis", "Megenagna", "Piassa"];

export default function OrderForm() {
  const { items, total, clear } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole",
    notes: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);

  const errors = validate(form);
  const hasErrors = Object.keys(errors).length > 0;

  const showError = (field) => touched[field] && errors[field];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    if (hasErrors || items.length === 0) {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        document.getElementById(firstError)?.focus();
      }
      setTouched({ name: true, phone: true, area: true, notes: true });
      return;
    }

    setSubmitting(true);
    setServerError(null);
    try {
      await placeOrder(form);
      setSucceeded(true);
      clear();
      setForm({ name: "", phone: "", area: "Bole", notes: "" });
      setTouched({});
    } catch (err) {
      setServerError(err.message);
      document.getElementById("phone")?.focus();
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0 && !succeeded) {
    return (
      <div className="checkout-panel">
        <h3>Checkout</h3>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="checkout-panel">
      <h3>Checkout</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} — {item.price} ETB
          </li>
        ))}
      </ul>
      <p>
        <strong>Total: {total} ETB</strong>
      </p>

      {succeeded ? (
        <p role="status" className="success">
          Order submitted successfully! We'll call you shortly.
        </p>
      ) : (
        <form className="order-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("name") ? "true" : "false"}
              aria-describedby={showError("name") ? "name-error" : undefined}
            />
            {showError("name") && (
              <p id="name-error" className="err" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* TeleBirr phone */}
          <div>
            <label htmlFor="phone">TeleBirr number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="09... or +2519..."
              aria-invalid={showError("phone") ? "true" : "false"}
              aria-describedby={showError("phone") ? "phone-error" : undefined}
            />
            {showError("phone") && (
              <p id="phone-error" className="err" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Area */}
          <div>
            <label htmlFor="area">Delivery area</label>
            <select
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("area") ? "true" : "false"}
              aria-describedby={showError("area") ? "area-error" : undefined}
            >
              {AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            {showError("area") && (
              <p id="area-error" className="err" role="alert">
                {errors.area}
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3}
            />
          </div>

          {/* Server-side error */}
          {serverError && (
            <p className="err" role="alert">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : `Pay with TeleBirr — ${total} ETB`}
          </button>
        </form>
      )}
    </div>
  );
}