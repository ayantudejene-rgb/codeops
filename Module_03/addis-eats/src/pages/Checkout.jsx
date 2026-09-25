import OrderForm from "../components/OrderForm";

export default function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Please confirm your delivery details below.</p>
      <OrderForm />
    </div>
  );
}