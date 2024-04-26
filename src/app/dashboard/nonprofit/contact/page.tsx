import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Contact = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return <div>Contact</div>;
};

export default Contact;
