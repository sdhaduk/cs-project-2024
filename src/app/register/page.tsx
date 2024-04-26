import SignUpForm from "@/components/SignUpForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignUpForm />
    </div>
  );
};

export default page;
