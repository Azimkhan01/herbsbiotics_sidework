import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// CREATE CATEGORY
export async function POST(req) {
  try {
    const body = await req.json();

    const category = await prisma.categories.create({
      data: {
        category_id: body.category_id,
        category_name: body.category_name,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}

// GET ALL CATEGORIES
export async function GET() {
  try {
    const categories = await prisma.categories.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
      orderBy: {
        category_name: "asc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}