import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// ✅ GET SINGLE PRODUCT
export async function GET(req, context) {
    try {
        const { id } = await context.params; // ✅ NO await needed

        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                images: true, // 🔥 IMPORTANT (you need this)
            },
        });

        if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Fetch failed" },
            { status: 500 }
        );
    }
}


// ✅ UPDATE PRODUCT
export async function PUT(req, context) {
    try {
        const { id } = await context.params;
        const body = await req.json();

        const updated = await prisma.product.update({
            where: { id },
            data: {
                name: body.name,
                description: body.description,
                highlights: body.highlights,
                price: body.price,
                stock: body.stock,
                categoryId: body.categoryId,
            },
        });

        return NextResponse.json(updated);
    } catch (err) {
        return NextResponse.json(
            { error: "Update failed" },
            { status: 500 }
        );
    }
}


// ✅ DELETE PRODUCT
export async function DELETE(req, context) {
    try {
        const { id } = await context.params;

        // 🔥 GET ALL IMAGES
        const images = await prisma.image.findMany({
            where: { productId: id },
        });

        // 🔥 DELETE ALL FROM CLOUDINARY
        for (const img of images) {
            await cloudinary.uploader.destroy(img.publicId);
        }

        // 🔥 DELETE PRODUCT (images auto delete via cascade)
        await prisma.product.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("DELETE PRODUCT ERROR:", err);
        return NextResponse.json(
            { error: "Delete failed" },
            { status: 500 }
        );
    }
}