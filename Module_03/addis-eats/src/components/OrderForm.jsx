import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", area: "Bole" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Copy, then override
  }

  // TeleBirr validation: accepts 0911223344 or +251911223344
  const phoneRegex = /^(?:\+251|0)9\d{8}$/;
  const isValidPhone = phoneRegex.test(form.phone);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidPhone && form.name) {
      setSubmitted(true);
      alert(`Order placed for ${form.name} at ${form.area}!`);
    }
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Delivery Details</h3>
      
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label>TeleBirr Phone: </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09... or +2519..."
        />
        {form.phone && !isValidPhone && (
          <p className="err">Use 09... or +2519...</p>
        )}
      </div>

      <div>
        <label>Area: </label>
        <select name="area" value={form.area} onChange={handleChange}>
          <option value="Bole">Bole</option>
          <option value="Kazanchis">Kazanchis</option>
          <option value="Piassa">Piassa</option>
        </select>
      </div>

      <button type="submit" disabled={!isValidPhone || !form.name}>
        Pay with TeleBirr
      </button>
      
      {submitted && <p>Order submitted successfully!</p>}
    </form>
  );
}

export default OrderForm;