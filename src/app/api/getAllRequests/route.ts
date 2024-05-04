import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();

  try {
    const allRequests = await prisma.request.findMany({
      where: {
        filled: false,
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
          allRequests: allRequests,
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
