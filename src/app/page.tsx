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
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>
            Click register if you do not have an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={"/login"}>
            <Button variant={"secondary"}>Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button className="ml-2">Register</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
