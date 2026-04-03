"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "next/navigation";

export default function ProductImagesPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [preview, setPreview] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch(`/api/product/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  // UPLOAD
  const onDrop = async (acceptedFiles) => {
    if (!product) return;

    const currentCount = product.images?.length || 0;

    if (currentCount >= 5) {
      return alert("Max 5 images allowed");
    }

    if (acceptedFiles.length + currentCount > 5) {
      return alert(`Only ${5 - currentCount} images allowed`);
    }

    const previews = acceptedFiles.map((f) =>
      URL.createObjectURL(f)
    );
    setPreview(previews);

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
    fetchProduct();
  };

  // DELETE IMAGE
  const handleDeleteImage = async (imageId) => {
    await fetch(`/api/upload/${imageId}`, {
      method: "DELETE",
    });
    fetchProduct();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  if (!product) return <p>Loading...</p>;

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

          <p className="text-gray-600">
            Drag & drop images here
          </p>
          <p className="text-sm text-gray-400">
            or click to upload
          </p>
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
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}