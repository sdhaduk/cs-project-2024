import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user.role == "Donor") {
    return redirect("/dashboard/donor");
  } else if (session?.user.role == "NonProfit") {
    return redirect("/dashboard/nonprofit");
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Welcome to Charitable Hearts</CardTitle>
          <CardDescription>
            Charitable Hearts provides a dynamic platform where non-profit
            organizations can request donations, enabling donor organizations to
            seamlessly meet these needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={"/register"}>
            <Button>Register</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
