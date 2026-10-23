import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";

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
        
        {/* Providers is a client component, but children stays server-rendered */}
        <Providers>{children}</Providers>

        <footer>
          <p>© 2026 Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}