import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

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

    // Max 5 images
    const count = await prisma.product_images.count({
      where: {
        productId,
      },
    });

    if (count >= 5) {
      return NextResponse.json(
        { error: "Maximum 5 images allowed" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise(
      (resolve, reject) => {
        const stream =
          cloudinary.uploader.upload_stream(
            {
              folder: "products",
              resource_type: "image",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

        stream.end(buffer);
      }
    );

    const image =
      await prisma.product_images.create({
        data: {
          id: randomUUID(),
          url: uploadResult.secure_url,
          productId,
        },
      });

    return NextResponse.json(image);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}