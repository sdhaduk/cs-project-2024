import Dashboard from "@/components/NonProfitDashboard";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return <Dashboard />;
};

export default page;
