"use client";

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "next/navigation";

export default function ProductImagesPage() {
const { id } = useParams();

const [product, setProduct] = useState(null);
const [preview, setPreview] = useState([]);

const [loading, setLoading] = useState(true);
const [uploading, setUploading] = useState(false);
const [deletingId, setDeletingId] = useState(null);

const fetchProduct = async () => {
try {
setLoading(true);


  const res = await fetch(`/api/product/${id}`);
  const data = await res.json();

  setProduct(data);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}


};

useEffect(() => {
if (id) {
fetchProduct();
}
}, [id]);

const onDrop = async (acceptedFiles) => {
if (!product) return;


const currentCount =
  product.product_images?.length || 0;

if (currentCount >= 5) {
  return alert("Maximum 5 images allowed");
}

if (
  acceptedFiles.length + currentCount >
  5
) {
  return alert(
    `Only ${5 - currentCount} more images allowed`
  );
}

const previews = acceptedFiles.map((file) =>
  URL.createObjectURL(file)
);

setPreview(previews);

try {
  setUploading(true);

  for (const file of acceptedFiles) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("productId", id);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Upload failed");
    }
  }

  await fetchProduct();
} catch (error) {
  console.error(error);
  alert("Image upload failed");
} finally {
  setUploading(false);
  setPreview([]);
}


};

const handleDeleteImage = async (
imageId
) => {
try {
setDeletingId(imageId);


  const res = await fetch(
    `/api/upload/${imageId}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  await fetchProduct();
} catch (error) {
  console.error(error);
  alert("Delete failed");
} finally {
  setDeletingId(null);
}


};

const {
getRootProps,
getInputProps,
isDragActive,
} = useDropzone({
onDrop,
multiple: true,
accept: {
"image/*": [],
},
});

if (loading) {
return ( <div className="min-h-screen bg-slate-100 p-6"> <div className="max-w-6xl mx-auto">


      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/3 bg-gray-300 rounded"></div>

        <div className="h-5 w-1/4 bg-gray-200 rounded"></div>

        <div className="h-40 bg-gray-200 rounded-xl"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(
            (item) => (
              <div
                key={item}
                className="h-40 bg-gray-200 rounded-xl"
              />
            )
          )}
        </div>
      </div>

    </div>
  </div>
);


}

if (!product) {
return ( <div className="p-10 text-center">
Product not found </div>
);
}

return ( <div className="min-h-screen bg-slate-100 p-6"> <div className="max-w-6xl mx-auto">


    <h1 className="text-3xl font-bold mb-3">
      Manage Images
    </h1>

    <h2 className="text-lg text-gray-600 mb-4">
      {product.Extract_Name}
    </h2>

    <p className="text-sm text-gray-500 mb-6">
      {product.product_images?.length || 0}
      /5 images used
    </p>

    {/* DROPZONE */}

    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all

      ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 bg-white"
      }
    `}
    >
      <input {...getInputProps()} />

      {uploading ? (
        <p className="text-gray-600">
          Uploading images...
        </p>
      ) : (
        <>
          <p className="font-medium">
            Drag & Drop Images Here
          </p>

          <p className="text-sm text-gray-500 mt-2">
            or click to select files
          </p>
        </>
      )}
    </div>

    {/* PREVIEW */}

    {preview.length > 0 && (
      <>
        <h3 className="font-semibold mt-6 mb-3">
          Upload Preview
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="h-40 w-full object-cover rounded-xl border"
            />
          ))}
        </div>
      </>
    )}

    {/* IMAGE GRID */}

    <div className="mt-8">

      <h3 className="font-semibold mb-4">
        Product Images
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {product.product_images?.length >
        0 ? (
          product.product_images.map(
            (img) => (
              <div
                key={img.id}
                className="relative group"
              >
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-40 object-cover rounded-xl border"
                />

                <button
                  onClick={() =>
                    handleDeleteImage(
                      img.id
                    )
                  }
                  disabled={
                    deletingId === img.id
                  }
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded text-xs"
                >
                  {deletingId === img.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            )
          )
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No images uploaded yet
          </div>
        )}

      </div>

    </div>

  </div>
</div>


);
}
