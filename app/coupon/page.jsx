"use client";

import { useEffect, useState } from "react";

export default function CouponAdmin() {
  const [form, setForm] = useState({
    code: "",
    discountType: "PERCENT",
    discountValue: "",
    minAmount: "",
    maxDiscount: "",
    startDate: "",
    endDate: "",
  });

  const [coupons, setCoupons] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // ✅ Loading states
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // 🔁 Fetch coupons
  const fetchCoupons = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/coupon");
      const data = await res.json();
      setCoupons(data.coupons || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  // ➕ Create / ✏️ Update
  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const url = editingId
        ? `/api/coupon/${editingId}`
        : "/api/coupon";

      const method = editingId ? "PUT" : "POST";

      await fetch(url, {
        method,
        body: JSON.stringify(form),
      });

      setForm({
        code: "",
        discountType: "PERCENT",
        discountValue: "",
        minAmount: "",
        maxDiscount: "",
        startDate: "",
        endDate: "",
      });

      setEditingId(null);
      fetchCoupons();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // ✏️ Edit
  const handleEdit = (c) => {
    setForm({
      ...c,
      startDate: c.startDate.slice(0, 16),
      endDate: c.endDate.slice(0, 16),
    });
    setEditingId(c.id);
  };

  // ❌ Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this coupon?")) return;

    setDeletingId(id);

    try {
      await fetch(`/api/coupon/${id}`, {
        method: "DELETE",
      });

      fetchCoupons();
    } catch (err) {
      console.error(err);
    } finally {
      setDeletingId(null);
    }
  };

  // 🧱 Skeleton
  const SkeletonCard = () => (
    <div className="border rounded-lg p-4 animate-pulse flex justify-between items-center">
      <div className="space-y-2">
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
        <div className="h-3 w-32 bg-gray-200 rounded"></div>
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-8 w-14 bg-gray-300 rounded"></div>
        <div className="h-8 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl font-bold mb-6">
          Coupon Management
        </h1>

        {/* FORM */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Edit Coupon" : "Create Coupon"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Coupon Code"
              value={form.code}
              onChange={(e) =>
                setForm({ ...form, code: e.target.value })
              }
              className="border p-2 rounded"
            />

            <select
              value={form.discountType}
              onChange={(e) =>
                setForm({ ...form, discountType: e.target.value })
              }
              className="border p-2 rounded"
            >
              <option value="PERCENT">Percent (%)</option>
              <option value="FLAT">Flat (₹)</option>
            </select>

            <input
              type="number"
              placeholder="Discount Value"
              value={form.discountValue}
              onChange={(e) =>
                setForm({ ...form, discountValue: e.target.value })
              }
              className="border p-2 rounded"
            />

            <input
              type="number"
              placeholder="Min Cart Value"
              value={form.minAmount}
              onChange={(e) =>
                setForm({ ...form, minAmount: e.target.value })
              }
              className="border p-2 rounded"
            />

            <input
              type="number"
              placeholder="Max Discount"
              value={form.maxDiscount}
              onChange={(e) =>
                setForm({ ...form, maxDiscount: e.target.value })
              }
              className="border p-2 rounded"
            />

            <input
              type="datetime-local"
              value={form.startDate}
              onChange={(e) =>
                setForm({ ...form, startDate: e.target.value })
              }
              className="border p-2 rounded"
            />

            <input
              type="datetime-local"
              value={form.endDate}
              onChange={(e) =>
                setForm({ ...form, endDate: e.target.value })
              }
              className="border p-2 rounded"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {submitting
              ? "Processing..."
              : editingId
              ? "Update Coupon"
              : "Create Coupon"}
          </button>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            All Coupons
          </h2>

          {loading ? (
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : coupons.length === 0 ? (
            <p className="text-gray-500">No coupons found</p>
          ) : (
            <div className="flex flex-col gap-4">
              {coupons.map((c) => {
                const isExpired =
                  new Date(c.endDate) < new Date();

                return (
                  <div
                    key={c.id}
                    className="border rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-lg">{c.code}</p>

                      <p className="text-sm text-gray-600">
                        {c.discountType === "PERCENT"
                          ? `${c.discountValue}% OFF`
                          : `₹${c.discountValue} OFF`}
                      </p>

                      <p className="text-xs text-gray-400">
                        {new Date(
                          c.startDate
                        ).toLocaleDateString()} →{" "}
                        {new Date(
                          c.endDate
                        ).toLocaleDateString()}
                      </p>

                      <span
                        className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                          isExpired
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {isExpired ? "Expired" : "Active"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(c)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(c.id)}
                        disabled={deletingId === c.id}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                      >
                        {deletingId === c.id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}