import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food, delivered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>{" | "}
          <Link href="/menu">Menu</Link>{" | "}
          <Link href="/cart">Cart</Link>{" | "}
          <Link href="/checkout">Checkout</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}