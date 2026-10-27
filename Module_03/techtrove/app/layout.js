import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://techtrove.vercel.app"),
  title: { template: "%s - TechTrove", default: "TechTrove - Premium Electronics" },
  description: "Shop the latest laptops, phones, and audio gear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/products">Products</Link> | <Link href="/cart">Cart</Link> | <Link href="/checkout">Checkout</Link>
          </nav>
        </header>
        <Providers>{children}</Providers>
        <footer><p>© 2026 TechTrove</p></footer>
      </body>
    </html>
  );
}