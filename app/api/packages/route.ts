import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
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
  } catch (error) {
    console.error("Error fetching packages:", error);
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}
