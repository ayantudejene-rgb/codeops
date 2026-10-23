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
        <header>
          <nav>
            <Link href="/">Home</Link>{" | "}
            <Link href="/menu">Menu</Link>{" | "}
            <Link href="/cart">Cart</Link>{" | "}
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>
        
        {children}

        <footer>
          <p>© 2026 Addis Eats. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}