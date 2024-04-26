import RequestForm from "@/components/RequestForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Request = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle>Make a Request</CardTitle>
          <CardDescription>
            Fill in the title and description of the request
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RequestForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Request;
