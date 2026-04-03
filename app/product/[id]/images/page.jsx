"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "next/navigation";

export default function ProductImagesPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [preview, setPreview] = useState([]);
  const [uploading, setUploading] = useState(false); // upload loader
  const [deletingId, setDeletingId] = useState(null); // per image delete loader
  const [loading, setLoading] = useState(true); // product fetch loader

  const fetchProduct = async () => {
    setLoading(true);
    const res = await fetch(`/api/product/${id}`);
    const data = await res.json();
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  // UPLOAD
  const onDrop = async (acceptedFiles) => {
    if (!product) return;

    const currentCount = product.images?.length || 0;

    if (currentCount >= 5) return alert("Max 5 images allowed");

    if (acceptedFiles.length + currentCount > 5) {
      return alert(`Only ${5 - currentCount} images allowed`);
    }

    const previews = acceptedFiles.map((f) => URL.createObjectURL(f));
    setPreview(previews);

    setUploading(true);

    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", id);

      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
    }

    setPreview([]);
    setUploading(false);
    fetchProduct();
  };

  // DELETE IMAGE
  const handleDeleteImage = async (imageId) => {
    setDeletingId(imageId);
    await fetch(`/api/upload/${imageId}`, { method: "DELETE" });
    setDeletingId(null);
    fetchProduct();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  if (loading) {
    // Skeleton loader
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold mb-4">
          Manage Images - {product.name}
        </h1>

        {/* COUNT */}
        <p className="text-sm text-gray-600 mb-2">
          {product.images.length}/5 images used
        </p>

        {/* DROPZONE */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-6 rounded-xl text-center cursor-pointer transition
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
          `}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <p className="text-gray-600">Uploading...</p>
          ) : (
            <>
              <p className="text-gray-600">Drag & drop images here</p>
              <p className="text-sm text-gray-400">or click to upload</p>
            </>
          )}
        </div>

        {/* PREVIEW */}
        {preview.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {preview.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {product.images.map((img) => (
            <div key={img.id} className="relative">
              <img
                src={img.url}
                className="w-full h-32 object-cover rounded-lg"
              />

              <button
                onClick={() => handleDeleteImage(img.id)}
                disabled={deletingId === img.id}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                {deletingId === img.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}