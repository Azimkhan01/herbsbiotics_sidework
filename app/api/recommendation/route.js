import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

// GET ALL
export async function GET() {
  try {
    const data =
      await prisma.recommended_products.findMany({
        include: {
          products: {
            include: {
              product_images: true,
              categories: true,
            },
          },
        },
      });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Fetch failed" },
      { status: 500 }
    );
  }
}

// ADD
export async function POST(req) {
  try {
    const body = await req.json();

    const exists =
      await prisma.recommended_products.findUnique({
        where: {
          productId: body.productId,
        },
      });

    if (exists) {
      return NextResponse.json(
        { error: "Already recommended" },
        { status: 400 }
      );
    }

    const recommendation =
      await prisma.recommended_products.create({
        data: {
          id: randomUUID(),
          productId: body.productId,
        },
      });

    return NextResponse.json(recommendation);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Create failed" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(req) {
  try {
    const body = await req.json();

    await prisma.recommended_products.delete({
      where: {
        productId: body.productId,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}