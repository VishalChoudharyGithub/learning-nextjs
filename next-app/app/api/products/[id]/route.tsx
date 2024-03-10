import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  await NextResponse.json(product);
}
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  const updatedProduct = await prisma.product.update({
    where: {
      id: product.id,
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  NextResponse.json(updatedProduct);
}
export async function DELETE(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });
  return NextResponse.json({ id });
}
