import Link from "next/link";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// 1. Set metadataBase and title template
export const metadata = {
  metadataBase: new URL("https://addiseats.et"), 
  title: {
    template: "%s - Addis Eats",
    default: "Addis Eats - food delivery in Addis Ababa",
  },
  description: "Order Doro Wat, Tibs and Kitfo from kitchens in Bole and Kazanchis. Delivery across Addis Ababa, paid with TeleBirr.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>{" | "}
            <Link href="/menu">Menu</Link>{" | "}
            <Link href="/cart">Cart</Link>{" | "}
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>
        
        <Providers>{children}</Providers>

        <footer>
          <p>© 2026 Addis Eats</p>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}