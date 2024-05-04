import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();

  try {
    const nonprofitsList = await prisma.user.findMany({
      where: {
        role: "NonProfit",
      },
    });

    return NextResponse.json(
      {
        nonprofits: nonprofitsList,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
