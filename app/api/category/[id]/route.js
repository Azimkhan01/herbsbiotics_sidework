import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// UPDATE
export async function PUT(req, context) {
  try {
    const {id} = await context.params;
    const body = await req.json();

    const updated = await prisma.category.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE
export async function DELETE(req, context) {
  try {
    const {id} = await context.params;

    await prisma.category.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}