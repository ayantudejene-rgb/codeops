"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => <div style={{ height: "320px", backgroundColor: "#e2e8f0", borderRadius: "8px" }}>Loading map...</div>,
});

export default function MapWrapper({ courierPos, customerPos }) {
  return <DeliveryMap courierPos={courierPos} customerPos={customerPos} />;
}