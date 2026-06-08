import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, context ) {
  try {
    const { id } = await context.params;

    const image =
      await prisma.product_images.findUnique({
        where: { id },
      });

    if (!image) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      );
    }

    await cloudinary.uploader.destroy(
      image.publicId
    );

    await prisma.product_images.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}