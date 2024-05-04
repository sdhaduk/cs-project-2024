import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();

  try {
    const donorList = await prisma.user.findMany({
      where: {
        role: "Donor",
      },
    });

    return NextResponse.json(
      {
        donors: donorList,
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
