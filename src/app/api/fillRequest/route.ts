import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const session = await getAuthSession();

  try {
    if (!session?.user.email) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Please include title, description and email" },
        { status: 400 }
      );
    }

    await prisma.request.update({
      where: {
        id: id,
      },
      data: {
        filled: true,
        donorEmail: session.user.email,
      },
    });

    return NextResponse.json(
      {
        message: "Request filled successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
