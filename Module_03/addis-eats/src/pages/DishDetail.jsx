import { useState } from "react";
import { useCart } from "../hooks/useCart";

function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", area: "Bole" });
  const [submitted, setSubmitted] = useState(false);
  const { items, total, clear } = useCart();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const phoneRegex = /^(?:\+251|0)9\d{8}$/;
  const isValidPhone = phoneRegex.test(form.phone);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidPhone && form.name && items.length > 0) {
      setSubmitted(true);
      clear();
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <div className="checkout-panel">
      <h3>Checkout</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - {item.price} ETB</li>
          ))}
        </ul>
      )}
      <p><strong>Total: {total} ETB</strong></p>

      <form className="order-form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>TeleBirr Phone: </label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="09... or +2519..." />
          {form.phone && !isValidPhone && <p className="err">Use 09... or +2519...</p>}
        </div>
        <div>
          <label>Area: </label>
          <select name="area" value={form.area} onChange={handleChange}>
            <option value="Bole">Bole</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Piassa">Piassa</option>
          </select>
        </div>
        <button type="submit" disabled={!isValidPhone || !form.name || items.length === 0}>
          Pay with TeleBirr
        </button>
        {submitted && <p>Order submitted successfully!</p>}
      </form>
    </div>
  );
}

export default OrderForm;