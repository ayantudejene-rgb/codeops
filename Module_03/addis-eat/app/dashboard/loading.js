export default function Loading() {
  return (
    <main>
      <h1>Staff Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "30px" }}>
        <div>
          <div style={{ height: "30px", width: "200px", backgroundColor: "#e2e8f0", marginBottom: "20px" }}></div>
          <div style={{ height: "300px", backgroundColor: "#e2e8f0", borderRadius: "8px" }}></div>
          <div style={{ height: "100px", backgroundColor: "#e2e8f0", marginTop: "15px" }}></div>
        </div>
        <div>
          <div style={{ height: "30px", width: "200px", backgroundColor: "#e2e8f0", marginBottom: "20px" }}></div>
          <div style={{ height: "300px", backgroundColor: "#e2e8f0", borderRadius: "8px" }}></div>
          <div style={{ height: "100px", backgroundColor: "#e2e8f0", marginTop: "15px" }}></div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div style={{ height: "40px", width: "200px", backgroundColor: "#e2e8f0", marginBottom: "20px" }}></div>
        <div style={{ height: "300px", backgroundColor: "#e2e8f0", borderRadius: "8px" }}></div>
      </div>
    </main>
  );
}