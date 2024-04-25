import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role: "Donor" | "NonProfit";
  }

  interface Session {
    user: User & {
      role: "Donor" | "NonProfit";
    };
    token: {
      role: "Donor" | "NonProfit";
    };
  }
}
