"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage() {
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);

const [loading, setLoading] = useState(true);
const [submitting, setSubmitting] = useState(false);
const [deletingId, setDeletingId] = useState(null);

const [editingProduct, setEditingProduct] = useState(null);

const [form, setForm] = useState({
Extract_Name: "",
Botanical_Name: "",
Part_Used: "",
Typical_Extraction_Ratio: "",
Active_Compound: "",
Primary_Benefit: "",
Unit_in_Order: "",
Package_Size: "",
appearance: "",
Category: "",
});

const fetchData = async () => {
try {
setLoading(true);


  const productsRes = await fetch("/api/product");
  const categoriesRes = await fetch("/api/category");

  const productsData = await productsRes.json();
  const categoriesData = await categoriesRes.json();

  setProducts(productsData);
  setCategories(categoriesData);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}


};

useEffect(() => {
fetchData();
}, []);

const resetForm = () => {
setForm({
Extract_Name: "",
Botanical_Name: "",
Part_Used: "",
Typical_Extraction_Ratio: "",
Active_Compound: "",
Primary_Benefit: "",
Unit_in_Order: "",
Package_Size: "",
appearance: "",
Category: "",
});
};

const handleCreate = async () => {
if (!form.Extract_Name || !form.Category) {
return alert("Extract Name and Category are required");
}


try {
  setSubmitting(true);

  const res = await fetch("/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    throw new Error("Create failed");
  }

  resetForm();
  fetchData();
} catch (error) {
  console.error(error);
  alert("Failed to create product");
} finally {
  setSubmitting(false);
}


};

const handleUpdate = async () => {
if (!editingProduct) return;


try {
  setSubmitting(true);

  const res = await fetch(
    `/api/product/${editingProduct.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );

  if (!res.ok) {
    throw new Error("Update failed");
  }

  setEditingProduct(null);
  resetForm();
  fetchData();
} catch (error) {
  console.error(error);
  alert("Failed to update product");
} finally {
  setSubmitting(false);
}


};

const handleDelete = async (id) => {
try {
setDeletingId(id);


  const res = await fetch(`/api/product/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  fetchData();
} catch (error) {
  console.error(error);
  alert("Delete failed");
} finally {
  setDeletingId(null);
}


};

return ( <div className="min-h-screen bg-slate-100 p-6"> <div className="max-w-7xl mx-auto">


    <h1 className="text-3xl font-bold mb-8">
      Product Management
    </h1>

    {/* FORM */}

    <div className="bg-white rounded-2xl shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-5">
        {editingProduct
          ? "Update Product"
          : "Create Product"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          className="border p-3 rounded-lg"
          placeholder="Extract Name"
          value={form.Extract_Name}
          onChange={(e) =>
            setForm({
              ...form,
              Extract_Name: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Botanical Name"
          value={form.Botanical_Name}
          onChange={(e) =>
            setForm({
              ...form,
              Botanical_Name: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Part Used"
          value={form.Part_Used}
          onChange={(e) =>
            setForm({
              ...form,
              Part_Used: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Typical Extraction Ratio"
          value={form.Typical_Extraction_Ratio}
          onChange={(e) =>
            setForm({
              ...form,
              Typical_Extraction_Ratio:
                e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Active Compound"
          value={form.Active_Compound}
          onChange={(e) =>
            setForm({
              ...form,
              Active_Compound: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Primary Benefit"
          value={form.Primary_Benefit}
          onChange={(e) =>
            setForm({
              ...form,
              Primary_Benefit: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Unit In Order"
          value={form.Unit_in_Order}
          onChange={(e) =>
            setForm({
              ...form,
              Unit_in_Order: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Package Size"
          value={form.Package_Size}
          onChange={(e) =>
            setForm({
              ...form,
              Package_Size: e.target.value,
            })
          }
        />

        <input
          className="border p-3 rounded-lg"
          placeholder="Appearance"
          value={form.appearance}
          onChange={(e) =>
            setForm({
              ...form,
              appearance: e.target.value,
            })
          }
        />

        <select
          className="border p-3 rounded-lg"
          value={form.Category}
          onChange={(e) =>
            setForm({
              ...form,
              Category: e.target.value,
            })
          }
        >
          <option value="">
            Select Category
          </option>

          {categories.map((cat) => (
            <option
              key={cat.category_id}
              value={cat.category_id}
            >
              {cat.category_name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={
            editingProduct
              ? handleUpdate
              : handleCreate
          }
          disabled={submitting}
          className={`px-5 py-2 rounded-lg text-white ${
            editingProduct
              ? "bg-yellow-500"
              : "bg-blue-600"
          }`}
        >
          {submitting
            ? "Processing..."
            : editingProduct
            ? "Update Product"
            : "Create Product"}
        </button>

        {editingProduct && (
          <button
            onClick={() => {
              setEditingProduct(null);
              resetForm();
            }}
            className="px-5 py-2 bg-gray-500 text-white rounded-lg"
          >
            Cancel
          </button>
        )}
      </div>
    </div>

    {/* PRODUCTS */}

    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold text-lg">
              {p.Extract_Name}
            </h3>

            <p className="text-gray-500 text-sm">
              {p.Botanical_Name}
            </p>

            <div className="mt-4 text-sm space-y-1">
              <p>
                <strong>Part Used:</strong>{" "}
                {p.Part_Used || "-"}
              </p>

              <p>
                <strong>Ratio:</strong>{" "}
                {p.Typical_Extraction_Ratio || "-"}
              </p>

              <p>
                <strong>Compound:</strong>{" "}
                {p.Active_Compound || "-"}
              </p>

              <p>
                <strong>Benefit:</strong>{" "}
                {p.Primary_Benefit || "-"}
              </p>

              <p>
                <strong>Package:</strong>{" "}
                {p.Package_Size || "-"}
              </p>

              <p>
                <strong>Appearance:</strong>{" "}
                {p.appearance || "-"}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {p.categories?.category_name}
              </p>
            </div>

            <div className="flex gap-2 mt-4 overflow-x-auto">
              {p.product_images?.map((img) => (
                <img
                  key={img.id}
                  src={img.url}
                  alt=""
                  className="w-20 h-20 rounded-lg object-cover"
                />
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {p.product_images?.length || 0}/5 images
            </p>

            <div className="flex justify-between mt-4">
              <Link href={`/product/${p.id}/images`}>
                <button className="px-3 py-1 bg-purple-500 text-white rounded">
                  Images
                </button>
              </Link>

              <div className="flex gap-2">

                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });

                    setEditingProduct(p);

                    setForm({
                      Extract_Name:
                        p.Extract_Name || "",

                      Botanical_Name:
                        p.Botanical_Name || "",

                      Part_Used:
                        p.Part_Used || "",

                      Typical_Extraction_Ratio:
                        p.Typical_Extraction_Ratio ||
                        "",

                      Active_Compound:
                        p.Active_Compound || "",

                      Primary_Benefit:
                        p.Primary_Benefit || "",

                      Unit_in_Order:
                        p.Unit_in_Order || "",

                      Package_Size:
                        p.Package_Size || "",

                      appearance:
                        p.appearance || "",

                      Category:
                        p.Category || "",
                    });
                  }}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  disabled={deletingId === p.id}
                  onClick={() =>
                    handleDelete(p.id)
                  }
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  {deletingId === p.id
                    ? "Deleting..."
                    : "Delete"}
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>


);
}
