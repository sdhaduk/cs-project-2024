"use client";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LogOut, UserRound } from "lucide-react";

type Props = {
  user: Pick<User, "role" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
  if (user.role == "NonProfit") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserRound />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.email && <p className="font-medium">{user.email}</p>}
              {user.role && (
                <p className="w-[200px] truncate text-sm text-zinc-700">
                  {user.role}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/nonprofit/request">Create a request</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/nonprofit/contact">Contact a Donor</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              signOut().catch(console.error);
            }}
            className="text-red-400 cursor-pointer"
          >
            Sign Out
            <LogOut className="w-4 h-4 ml-2" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserRound />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.email && <p className="font-medium">{user.email}</p>}
              {user.role && (
                <p className="w-[200px] truncate text-sm text-zinc-700">
                  {user.role}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/">View requests</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/">Contact a NonProfit</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              signOut().catch(console.error);
            }}
            className="text-red-400 cursor-pointer"
          >
            Sign Out
            <LogOut className="w-4 h-4 ml-2" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default UserAccountNav;
