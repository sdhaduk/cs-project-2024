import Register_Donor from "@/components/Register_Donor";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Register_Donor />
    </div>
  );
};

export default page;
