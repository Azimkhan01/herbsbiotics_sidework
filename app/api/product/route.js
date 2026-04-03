import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// CREATE PRODUCT
export async function POST(req) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description, // array
        highlights: body.highlights,   // array
        price: body.price,
        stock: body.stock,
        categoryId: body.categoryId,
      },
    });

    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}

// GET ALL PRODUCTS
export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });

  return NextResponse.json(products);
}