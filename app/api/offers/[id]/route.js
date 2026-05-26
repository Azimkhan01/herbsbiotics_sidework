import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req,
  context
) {
  const { id } = await context.params;

  const body = await req.json();

  await prisma.offerProduct.deleteMany({
    where: {
      offerId: id,
    },
  });

  await prisma.offerCategory.deleteMany({
    where: {
      offerId: id,
    },
  });

  const updatedOffer =
    await prisma.offer.update({
      where: {
        id,
      },

      data: {
        title: body.title,

        description:
          body.description,

        discountType:
          body.discountType,

        discountValue:
          body.discountValue,

        applyType:
          body.applyType,

        startDate: new Date(
          body.startDate
        ),

        endDate: new Date(
          body.endDate
        ),

        products: {
          create:
            body.productIds?.map(
              (productId) => ({
                productId,
              })
            ) || [],
        },

        categories: {
          create:
            body.categoryIds?.map(
              (categoryId) => ({
                categoryId,
              })
            ) || [],
        },
      },
    });

  return NextResponse.json(
    updatedOffer
  );
}

export async function DELETE(
  req,
  context
) {
  const { id } = await context.params;

  await prisma.offer.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    message: "Deleted",
  });
}