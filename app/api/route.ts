// app/api/packages/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const packages = await prisma.package.findMany();
  return NextResponse.json(packages);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPackage = await prisma.package.create({ data: body });
  return NextResponse.json(newPackage);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const updatedPackage = await prisma.package.update({
    where: { id: body.id },
    data: body,
  });
  return NextResponse.json(updatedPackage);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const deletedPackage = await prisma.package.delete({
    where: { id: String(id) },
  });
  return NextResponse.json(deletedPackage);
}
