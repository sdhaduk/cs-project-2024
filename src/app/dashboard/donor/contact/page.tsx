import DonorContact from "@/components/DonorContact";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {};

const Contact = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="mt-28 mx-80">
      <DonorContact />
    </div>
  );
};

export default Contact;
