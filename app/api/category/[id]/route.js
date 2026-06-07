import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, context) {
  try {
    const body = await req.json();

    const { id } = await context.params;

    const category = await prisma.categories.update({
      where: {
        category_id: id,
      },
      data: {
        category_name: body.category_name,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}
export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    await prisma.categories.delete({
      where: {
        category_id: id,
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