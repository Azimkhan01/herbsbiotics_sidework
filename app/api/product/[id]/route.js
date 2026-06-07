import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET SINGLE PRODUCT
export async function GET(req, context) {
  try {
    const { id } = await context.params;

    const product = await prisma.products.findUnique({
      where: {
        id,
      },
      include: {
        product_images: true,
        categories: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Fetch failed" },
      { status: 500 }
    );
  }
}

// UPDATE PRODUCT
export async function PUT(req, context) {
  try {
    const { id } = await context.params;

    const body = await req.json();

    const updated = await prisma.products.update({
      where: {
        id,
      },
      data: {
        Extract_Name: body.Extract_Name,
        Botanical_Name: body.Botanical_Name || null,
        Part_Used: body.Part_Used || null,
        Typical_Extraction_Ratio:
          body.Typical_Extraction_Ratio || null,

        Active_Compound: body.Active_Compound || null,
        Primary_Benefit: body.Primary_Benefit || null,
        Unit_in_Order: body.Unit_in_Order || null,
        Package_Size: body.Package_Size || null,
        appearance: body.appearance || null,

        Category: body.Category,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}

// DELETE PRODUCT
export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    await prisma.products.delete({
      where: {
        id,
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