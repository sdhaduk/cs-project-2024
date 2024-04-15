import Link from "next/link";
import SignInButton from "./SignInButton";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/CharitableHearts.jpg"
            width={150}
            height={150}
            alt="Logo"
          />
        </Link>
        <div className="flex items-center">
          <div className="flex items-center">
            <SignInButton text="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
