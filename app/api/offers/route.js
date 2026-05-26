import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// CREATE OFFER
export async function POST(req) {
  try {
    const body = await req.json();

    const offer = await prisma.offer.create({
      data: {
        title: body.title,

        description: body.description,

        discountType: body.discountType,

        discountValue: Number(body.discountValue),

        applyType: body.applyType,

        minQuantity: body.minQuantity
          ? Number(body.minQuantity)
          : null,

        minAmount: body.minAmount
          ? Number(body.minAmount)
          : null,

        maxDiscount: body.maxDiscount
          ? Number(body.maxDiscount)
          : null,

        startDate: new Date(body.startDate),

        endDate: new Date(body.endDate),

        products: {
          create:
            body.productIds?.map((id) => ({
              productId: id,
            })) || [],
        },

        categories: {
          create:
            body.categoryIds?.map((id) => ({
              categoryId: id,
            })) || [],
        },
      },

      include: {
        products: {
          include: {
            product: true,
          },
        },

        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return NextResponse.json(offer);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Create failed" },
      { status: 500 }
    );
  }
}

// GET OFFERS
export async function GET() {
  try {
    const offers = await prisma.offer.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },

        categories: {
          include: {
            category: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(offers);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Fetch failed" },
      { status: 500 }
    );
  }
}