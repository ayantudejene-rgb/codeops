import Sidebar from "@/components/Sidebar";

export default function MenuLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <aside style={{ width: "200px", borderRight: "1px solid #ccc", paddingRight: "20px" }}>
        <Sidebar />
      </aside>
      <section style={{ flex: 1 }}>
        {children}
      </section>
    </div>
  );
}