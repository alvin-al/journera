import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const packageData = await prisma.package.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      featuredImage: true,
      itinerary: true,
      price: true,
      originalPrice: true,
      slug: true,
      description: true,
    },
  });

  if (!packageData) {
    return NextResponse.json({ error: "No packages found" }, { status: 404 });
  }

  return NextResponse.json(packageData);
}
