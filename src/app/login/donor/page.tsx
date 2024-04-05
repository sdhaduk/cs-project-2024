import Login2 from "@/components/Login2";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Login2 />
      </div>
    </div>
  );
};

export default page;
