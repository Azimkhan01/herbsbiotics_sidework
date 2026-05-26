import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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
}

export async function POST(req) {
  const body = await req.json();

  const offer = await prisma.offer.create({
    data: {
      title: body.title,

      slug: body.title
        .toLowerCase()
        .replace(/\s+/g, "-"),

      description: body.description,

      discountType: body.discountType,

      discountValue: body.discountValue,

      applyType: body.applyType,

      startDate: new Date(body.startDate),

      endDate: new Date(body.endDate),

      products: {
        create:
          body.productIds?.map(
            (id) => ({
              productId: id,
            })
          ) || [],
      },

      categories: {
        create:
          body.categoryIds?.map(
            (id) => ({
              categoryId: id,
            })
          ) || [],
      },
    },

    include: {
      products: true,
      categories: true,
    },
  });

  return NextResponse.json(offer);
}