import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// UPDATE
export async function PUT(req, context) {
    const { id } = await context.params; // ✅ FIX
    const body = await req.json();

    const coupon = await prisma.coupon.update({
        where: { id },
        data: {
            ...body,
            discountValue: Number(body.discountValue),
            minAmount: body.minAmount ? Number(body.minAmount) : null,
            maxDiscount: body.maxDiscount ? Number(body.maxDiscount) : null,
            startDate: new Date(body.startDate),
            endDate: new Date(body.endDate),
        },
    });

    return NextResponse.json({ success: true, coupon });
}

// DELETE
export async function DELETE(req, context) {
    const { id } = await context.params; // ✅ FIX

    await prisma.coupon.delete({
        where: { id },
    });

    return NextResponse.json({ success: true });
}