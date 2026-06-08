import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const productId = formData.get("productId");

    if (!file || !productId) {
      return NextResponse.json(
        { error: "Missing file or productId" },
        { status: 400 }
      );
    }

    // ✅ LIMIT CHECK
    const count = await prisma.product_images.count({
      where: { productId },
    });

    if (count >= 5) {
      return NextResponse.json(
        { error: "Max 5 images allowed" },
        { status: 400 }
      );
    }

    // ✅ CONVERT FILE → BUFFER
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ✅ UPLOAD TO CLOUDINARY
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "products", // optional but good
          resource_type: "image", // ✅ IMPORTANT
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.end(buffer);
    });

    // ✅ SAVE TO DB
    const savedImage = await prisma.product_images.create({
      data: {
        productId,
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        format: uploadResult.format,
        width: uploadResult.width,
        height: uploadResult.height,
        size: uploadResult.bytes,
      },
    });

    return NextResponse.json(savedImage);
  } catch (err) {
    console.error("UPLOAD ERROR:", err); // 🔥 IMPORTANT
    return NextResponse.json(
      { error: err.message || "Upload failed" },
      { status: 500 }
    );
  }
}