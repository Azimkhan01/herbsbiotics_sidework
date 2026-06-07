import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

// CREATE PRODUCT
export async function POST(req) {
  try {
    const body = await req.json();

    const product = await prisma.products.create({
      data: {
        id: randomUUID(),

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

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Create failed" },
      { status: 500 }
    );
  }
}

// GET ALL PRODUCTS
export async function GET() {
  try {
    const products = await prisma.products.findMany({
      include: {
        categories: true,
        product_images: true,
      },
      orderBy: {
        Extract_Name: "asc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Fetch failed" },
      { status: 500 }
    );
  }
}