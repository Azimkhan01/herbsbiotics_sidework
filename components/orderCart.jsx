"use client";

import { useState } from "react";
import OrderItems from "./OrderItems";

export default function OrderCard({ order }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">
            {order.firstName} {order.lastName}
          </h2>
          <p className="text-sm text-gray-500">{order.email}</p>
          <p className="text-sm">{order.phone}</p>
        </div>

        <div className="text-right">
          <p className="font-bold">₹{order.total}</p>
          <span
            className={`text-xs px-2 py-1 rounded ${
              order.payment_status === "PAID"
                ? "bg-green-100 text-green-700"
                : order.payment_status === "FAILED"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.payment_status}
          </span>
        </div>
      </div>

      {/* Address */}
      <p className="text-sm mt-2 text-gray-600">{order.address}</p>

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-blue-600 text-sm"
      >
        {open ? "Hide Items" : "View Items"}
      </button>

      {/* Items */}
      {open && <OrderItems items={order.items} />}
    </div>
  );
}