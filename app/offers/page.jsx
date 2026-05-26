"use client";

import React, { useEffect, useState } from "react";

import { Search } from "lucide-react";

function Page() {
  const [offers, setOffers] = useState([]);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [productSearch, setProductSearch] =
    useState("");

  const [categorySearch, setCategorySearch] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",

      description: "",

      discountType: "PERCENT",

      discountValue: "",

      applyType: "ALL",

      startDate: "",

      endDate: "",

      productIds: [],

      categoryIds: [],

      // BULK OFFER

      minQuantity: "",

      minAmount: "",

      maxDiscount: "",
    });

  // ================= FETCH =================

  const fetchOffers = async () => {
    try {
      const res = await fetch("/api/offers");

      const data = await res.json();

      setOffers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category");

      const data = await res.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOffers();

    fetchProducts();

    fetchCategories();
  }, []);

  // ================= FILTERS =================

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          productSearch.toLowerCase()
        )
    );

  const filteredCategories =
    categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(
          categorySearch.toLowerCase()
        )
    );

  // ================= INPUT =================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,

      [e.target.name]: e.target.value,
    }));
  };

  // ================= PRODUCT TOGGLE =================

  const toggleProduct = (id) => {
    setFormData((prev) => ({
      ...prev,

      productIds: prev.productIds.includes(
        id
      )
        ? prev.productIds.filter(
            (item) => item !== id
          )
        : [...prev.productIds, id],
    }));
  };

  // ================= CATEGORY TOGGLE =================

  const toggleCategory = (id) => {
    setFormData((prev) => ({
      ...prev,

      categoryIds:
        prev.categoryIds.includes(id)
          ? prev.categoryIds.filter(
              (item) => item !== id
            )
          : [...prev.categoryIds, id],
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = editingId
        ? "PUT"
        : "POST";

      const url = editingId
        ? `/api/offers/${editingId}`
        : "/api/offers";

      await fetch(url, {
        method,

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          ...formData,

          discountValue: Number(
            formData.discountValue
          ),

          minQuantity: Number(
            formData.minQuantity
          ),

          minAmount: Number(
            formData.minAmount
          ),

          maxDiscount: Number(
            formData.maxDiscount
          ),
        }),
      });

      setEditingId(null);

      setFormData({
        title: "",

        description: "",

        discountType: "PERCENT",

        discountValue: "",

        applyType: "ALL",

        startDate: "",

        endDate: "",

        productIds: [],

        categoryIds: [],

        minQuantity: "",

        minAmount: "",

        maxDiscount: "",
      });

      fetchOffers();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/offers/${id}`, {
        method: "DELETE",
      });

      fetchOffers();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= EDIT =================

  const handleEdit = (offer) => {
    setEditingId(offer.id);

    setFormData({
      title: offer.title,

      description:
        offer.description || "",

      discountType:
        offer.discountType,

      discountValue: String(
        offer.discountValue
      ),

      applyType: offer.applyType,

      startDate:
        offer.startDate.slice(0, 10),

      endDate:
        offer.endDate.slice(0, 10),

      productIds:
        offer.products?.map(
          (item) => item.productId
        ) || [],

      categoryIds:
        offer.categories?.map(
          (item) => item.categoryId
        ) || [],

      minQuantity: String(
        offer.minQuantity || ""
      ),

      minAmount: String(
        offer.minAmount || ""
      ),

      maxDiscount: String(
        offer.maxDiscount || ""
      ),
    });

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Offers Management
          </h1>

          <p className="text-zinc-400 mt-3">
            Create product discounts,
            category offers, bulk
            quantity discounts and
            storewide campaigns
          </p>
        </div>

        {/* ================= FORM ================= */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-8">
            {editingId
              ? "Update Offer"
              : "Create Offer"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* TITLE */}

            <input
              type="text"
              name="title"
              placeholder="Offer title"
              value={formData.title}
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            />

            {/* DISCOUNT VALUE */}

            <input
              type="number"
              name="discountValue"
              placeholder="Discount value"
              value={
                formData.discountValue
              }
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            />

            {/* DISCOUNT TYPE */}

            <select
              name="discountType"
              value={
                formData.discountType
              }
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            >
              <option value="PERCENT">
                Percentage
              </option>

              <option value="FLAT">
                Flat Amount
              </option>
            </select>

            {/* APPLY TYPE */}

            <select
              name="applyType"
              value={formData.applyType}
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            >
              <option value="ALL">
                All Products
              </option>

              <option value="PRODUCT">
                Specific Products
              </option>

              <option value="CATEGORY">
                Category Offer
              </option>

              <option value="BULK">
                Bulk Quantity Offer
              </option>
            </select>

            {/* START DATE */}

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            />

            {/* END DATE */}

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
            />

            {/* DESCRIPTION */}

            <textarea
              name="description"
              placeholder="Offer description"
              value={formData.description}
              onChange={handleChange}
              className="md:col-span-2 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none min-h-[120px]"
            />

            {/* ================= BULK OFFER ================= */}

            {formData.applyType ===
              "BULK" && (
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
                <input
                  type="number"
                  name="minQuantity"
                  placeholder="Minimum quantity"
                  value={
                    formData.minQuantity
                  }
                  onChange={handleChange}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
                />

                <input
                  type="number"
                  name="minAmount"
                  placeholder="Minimum amount"
                  value={
                    formData.minAmount
                  }
                  onChange={handleChange}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
                />

                <input
                  type="number"
                  name="maxDiscount"
                  placeholder="Maximum discount"
                  value={
                    formData.maxDiscount
                  }
                  onChange={handleChange}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 outline-none"
                />
              </div>
            )}

            {/* ================= PRODUCTS ================= */}

            {formData.applyType ===
              "PRODUCT" && (
              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">
                    Select Products
                  </h2>

                  <span className="text-sm text-zinc-400">
                    {
                      formData.productIds
                        .length
                    }{" "}
                    selected
                  </span>
                </div>

                {/* SEARCH */}

                <div className="relative mb-5">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={productSearch}
                    onChange={(e) =>
                      setProductSearch(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none"
                  />
                </div>

                {/* PRODUCTS */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[400px] overflow-y-auto pr-2">
                  {filteredProducts.map(
                    (product) => (
                      <button
                        type="button"
                        key={product.id}
                        onClick={() =>
                          toggleProduct(
                            product.id
                          )
                        }
                        className={`border rounded-2xl p-4 text-left transition-all duration-300 ${
                          formData.productIds.includes(
                            product.id
                          )
                            ? "bg-white text-black border-white"
                            : "border-zinc-700 bg-zinc-950 hover:border-zinc-500"
                        }`}
                      >
                        <h3 className="font-medium text-sm line-clamp-1">
                          {product.name}
                        </h3>

                        <p className="text-xs opacity-70 mt-2">
                          ₹
                          {product.price}
                        </p>

                        <p className="text-xs opacity-50 mt-1">
                          {
                            product.category
                              ?.name
                          }
                        </p>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* ================= CATEGORIES ================= */}

            {formData.applyType ===
              "CATEGORY" && (
              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">
                    Select Categories
                  </h2>

                  <span className="text-sm text-zinc-400">
                    {
                      formData
                        .categoryIds
                        .length
                    }{" "}
                    selected
                  </span>
                </div>

                {/* SEARCH */}

                <div className="relative mb-5">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={categorySearch}
                    onChange={(e) =>
                      setCategorySearch(
                        e.target.value
                      )
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none"
                  />
                </div>

                {/* CATEGORIES */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {filteredCategories.map(
                    (category) => (
                      <button
                        type="button"
                        key={category.id}
                        onClick={() =>
                          toggleCategory(
                            category.id
                          )
                        }
                        className={`border rounded-2xl p-4 text-left transition-all duration-300 ${
                          formData.categoryIds.includes(
                            category.id
                          )
                            ? "bg-white text-black border-white"
                            : "border-zinc-700 bg-zinc-950 hover:border-zinc-500"
                        }`}
                      >
                        <h3 className="font-medium text-sm">
                          {
                            category.name
                          }
                        </h3>

                        <p className="text-xs opacity-60 mt-2">
                          {
                            category.slug
                          }
                        </p>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* BUTTON */}

            <button className="bg-white text-black rounded-2xl p-4 font-semibold hover:scale-[0.98] transition-all">
              {editingId
                ? "Update Offer"
                : "Create Offer"}
            </button>
          </form>
        </div>

        {/* ================= OFFERS ================= */}

        <div className="grid gap-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="flex items-start justify-between flex-wrap gap-5">
                <div>
                  <h2 className="text-2xl font-bold">
                    {offer.title}
                  </h2>

                  <p className="text-zinc-400 mt-3 max-w-2xl">
                    {
                      offer.description
                    }
                  </p>

                  {/* TAGS */}

                  <div className="flex flex-wrap gap-3 mt-5">
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                      {offer.discountType ===
                      "PERCENT"
                        ? `${offer.discountValue}% OFF`
                        : `₹${offer.discountValue} OFF`}
                    </span>

                    <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                      {offer.applyType}
                    </span>
                  </div>

                  {/* BULK DETAILS */}

                  {offer.applyType ===
                    "BULK" && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm">
                        Min Qty:
                        {" "}
                        {
                          offer.minQuantity
                        }
                      </span>

                      <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
                        Min Amount:
                        {" "}
                        ₹
                        {
                          offer.minAmount
                        }
                      </span>

                      {offer.maxDiscount && (
                        <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm">
                          Max Discount:
                          {" "}
                          ₹
                          {
                            offer.maxDiscount
                          }
                        </span>
                      )}
                    </div>
                  )}

                  {/* PRODUCTS */}

                  {offer.applyType ===
                    "PRODUCT" && (
                    <div className="mt-6">
                      <h3 className="text-sm text-zinc-400 mb-3">
                        Products
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {offer.products?.map(
                          (item) => (
                            <span
                              key={
                                item
                                  .product
                                  .id
                              }
                              className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                            >
                              {
                                item
                                  .product
                                  .name
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* CATEGORIES */}

                  {offer.applyType ===
                    "CATEGORY" && (
                    <div className="mt-6">
                      <h3 className="text-sm text-zinc-400 mb-3">
                        Categories
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {offer.categories?.map(
                          (item) => (
                            <span
                              key={
                                item
                                  .category
                                  .id
                              }
                              className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                            >
                              {
                                item
                                  .category
                                  .name
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* ACTIONS */}

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      handleEdit(
                        offer
                      )
                    }
                    className="bg-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        offer.id
                      )
                    }
                    className="bg-red-500/20 text-red-400 px-5 py-3 rounded-2xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;