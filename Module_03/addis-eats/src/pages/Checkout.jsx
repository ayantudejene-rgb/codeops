import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OrderForm from "../components/OrderForm";

export default function Checkout() {
    const navigate = useNavigate();
    const [done, setDone] = useState(false);

    return (
      <div>
        <h2>Checkout</h2>
        <p>Please confirm your delivery details below.</p>
        <OrderForm />
        <p style={{ marginTop: "12px" }}>
          <button onClick={() => navigate("/orders/demo-123", { replace: true })}>
            Go to receipt (demo)
          </button>
        </p>
      </div>
    );
}