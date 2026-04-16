import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ GET all recommended products
export async function GET() {
  try {
    const data = await prisma.recommendedProduct.findMany({
      include: {
        product: {
          include: {
            images: true,
            category: true,
          },
        },
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

// ✅ ADD recommendation
export async function POST(req) {
  try {
    const body = await req.json();

    const created = await prisma.recommendedProduct.create({
      data: {
        productId: body.productId,
        status: true,
      },
    });

    return NextResponse.json(created);
  } catch (err) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}

// ✅ UPDATE (toggle status)
export async function PATCH(req) {
  try {
    const body = await req.json();

    const updated = await prisma.recommendedProduct.update({
      where: {
        productId: body.productId,
      },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// ✅ DELETE recommendation
export async function DELETE(req) {
  try {
    const body = await req.json();

    await prisma.recommendedProduct.delete({
      where: {
        productId: body.productId,
      },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}