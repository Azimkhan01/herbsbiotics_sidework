"use client";

import { useState } from "react";
import OrderCard from "./orderCard";

const filters = ["ALL", "PENDING", "PAID", "FAILED"];

export default function OrderList({ orders }) {
  const [filter, setFilter] = useState("ALL");

  const filteredOrders =
    filter === "ALL"
      ? orders
      : orders.filter((o) => o.payment_status === filter);

  return (
    <>
      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg border ${
              filter === f ? "bg-black text-white" : ""
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </>
  );
}