import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    // 🔥 FIND IMAGE FIRST
    const image = await prisma.image.findUnique({
      where: { id },
    });

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    // 🔥 DELETE FROM CLOUDINARY
    await cloudinary.uploader.destroy(image.publicId);

    // 🔥 DELETE FROM DB
    await prisma.image.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE IMAGE ERROR:", err);
    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}