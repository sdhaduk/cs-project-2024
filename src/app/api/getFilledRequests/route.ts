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

    const filledRequests = await prisma.request.findMany({
      where: {
        donorEmail: session.user.email,
      },
    });

    if (filledRequests.length == 0) {
      return NextResponse.json(
        {
          filledRequests: null,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          filledRequests: filledRequests,
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
