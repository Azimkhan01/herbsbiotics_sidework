import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// CREATE
export async function POST(req) {
  try {
    const body = await req.json();

    const category = await prisma.category.create({
      data: {
        name: body.name,
        slug: body.slug,
      },
    });

    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ error: "Create failed" }, { status: 500 });
  }
}

// GET ALL
export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(categories);
}