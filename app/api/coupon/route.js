import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// CREATE
export async function POST(req) {
    try {
        const body = await req.json();

        const coupon = await prisma.coupon.create({
            data: {
                code: body.code.toUpperCase(),

                discountType: body.discountType,

                // ✅ FIX HERE
                discountValue: Number(body.discountValue),
                minAmount: body.minAmount ? Number(body.minAmount) : null,
                maxDiscount: body.maxDiscount ? Number(body.maxDiscount) : null,

                startDate: new Date(body.startDate),
                endDate: new Date(body.endDate),
            },
        });

        return NextResponse.json({ success: true, coupon });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, error: err.message });
    }
}
// READ (LIST)
export async function GET() {
    const coupons = await prisma.coupon.findMany({
        orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, coupons });
}