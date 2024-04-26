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
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { message: "Please include title, description and email" },
        { status: 400 }
      );
    }

    const newRequest = await prisma.request.create({
      data: {
        title: title,
        filled: false,
        description: description,
        authorEmail: session.user.email,
      },
    });

    return NextResponse.json(
      {
        message: "Request created successfully",
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
