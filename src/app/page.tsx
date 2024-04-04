"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="text-center">Welcome!</CardTitle>
          <CardDescription className="text-center">
            Click Login if you are a non-profit organization, otherwise choose
            Donor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={"/login/nonprofit"}>
            <Button className="ml-4">Login</Button>
          </Link>
          <Link href={"/login/donor"}>
            <Button className="ml-20">Donor</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
