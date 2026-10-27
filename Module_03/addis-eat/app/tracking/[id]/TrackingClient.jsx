"use client";

import { useState, useEffect } from "react";
import MapWrapper from "./MapWrapper";
import { when } from "@/lib/format";

const CUSTOMER_POS = [8.9950, 38.7896]; 
const COURIER_POS = [9.0150, 38.7650];

export default function TrackingClient({ id, initialStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const [connection, setConnection] = useState("connecting");

  useEffect(() => {
    const es = new EventSource(`/api/orders/${id}/stream`);

    es.onopen = () => setConnection("live");
    es.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setStatus(data.status);
      if (data.status === "Delivered") {
        setConnection("closed");
        es.close();
      }
    };
    es.onerror = () => {
      setConnection("reconnecting");
    };

    return () => es.close();
  }, [id]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "20px" }}>
      <div>
        <MapWrapper courierPos={COURIER_POS} customerPos={CUSTOMER_POS} />
      </div>
      <div>
        <h2>Order Details</h2>
        <p><strong>Order ID:</strong> {id}</p>
        <p>
          <strong>Status:</strong> {status}
          <span style={{ marginLeft: "10px", fontSize: "0.8em", color: connection === "live" ? "green" : "orange" }}>
            ({connection})
          </span>
        </p>
        
        <h3>Delivery Info (Text)</h3>
        <p>Courier is currently at Kazanchis.</p>
        <p>Delivery address: Bole, near Getu Commercial Center.</p>
        <p>Estimated arrival: {when.format(new Date(Date.now() + 30 * 60000))}</p>
      </div>
    </div>
  );
}