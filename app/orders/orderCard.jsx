"use client";

import { useState } from "react";
import OrderItems from "./orderItems";
import { useRouter } from "next/navigation";

export default function OrderCard({ order }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this order?");
    if (!confirmDelete) return;

    await fetch(`/api/orders/${order.id}`, {
      method: "DELETE",
    });

    router.refresh(); // 🔥 re-fetch server data
  };

  const updateStatus = async (status) => {
    await fetch(`/api/orders/${order.id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });

    router.refresh();
  };

  return (
    <div className="border rounded-xl p-4 shadow bg-white">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold">
            {order.firstName} {order.lastName}
          </h2>
          <p className="text-sm">{order.email}</p>
        </div>

        <div className="text-right">
          <p className="font-bold">₹{order.total}</p>
          <p>{order.payment_status}</p>
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="text-blue-600 mt-2"
      >
        {open ? "Hide Items" : "View Items"}
      </button>

      {open && <OrderItems items={order.items} />}

      {/* 🔥 ACTION BUTTONS */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => updateStatus("PAID")}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Mark Paid
        </button>

        <button
          onClick={() => updateStatus("FAILED")}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Mark Failed
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}