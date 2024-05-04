import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();

  try {
    if (!session?.user.email) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
    }

    const userEmail = session.user.email;

    const allRequests = await prisma.request.findMany({
      where: {
        authorEmail: {
          equals: userEmail,
        },
      },
    });

    if (allRequests.length == 0) {
      return NextResponse.json(
        {
          userRequests: null,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          userRequests: allRequests,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
