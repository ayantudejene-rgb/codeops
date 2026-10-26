import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <h1>Addis Eats</h1>
      <p>Order Ethiopian food, delivered.</p>
      
      {}
      <Image 
        src="/kitfo.jpg" 
        alt="Delicious Ethiopian food" 
        width={1200} 
        height={600} 
        priority 
        style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
      />

      <div style={{ marginTop: "20px" }}>
        <Link href="/menu">See the menu</Link>
      </div>
    </main>
  );
}