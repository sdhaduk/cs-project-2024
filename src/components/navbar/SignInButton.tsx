"use client";

import { Button } from "../ui/button";
import Link from "next/link";
type Props = {
  text: string;
};

const SignInButton = ({ text }: Props) => {
  return (
    <Link href="/login">
    <Button>
      {text}
    </Button>
    </Link>
  );
};

export default SignInButton;
