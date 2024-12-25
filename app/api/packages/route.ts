import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const packages = await prisma.package.findMany({
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

  if (!packages) {
    return NextResponse.json({ error: "No packages found" }, { status: 404 });
  }

  return NextResponse.json(packages);
}
