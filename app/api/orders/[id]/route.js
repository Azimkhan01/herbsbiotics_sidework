import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    const { id } = await context.params; // ✅ MUST await

    await prisma.order.delete({
      where: { id },
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to delete order" },
      { status: 500 }
    );
  }
}

export async function PATCH(req, context) {
  try {
    const { id } = await context.params; // ✅ correct
    const body = await req.json();

    const order = await prisma.order.update({
      where: { id },
      data: {
        payment_status: body.status,
      },
      include: {
        items: true,
      },
    });

    // ✅ FIX Decimal here
    const safeOrder = {
      ...order,
      items: order.items.map(item => ({
        ...item,
        price: Number(item.price),
      })),
    };

    return Response.json(safeOrder);
  } catch (error) {
    return Response.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}