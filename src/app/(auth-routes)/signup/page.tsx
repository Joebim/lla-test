import SignUp from "~/components/auth/SignUp";

const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-axiforma">
      <div className="flex w-full items-center justify-center sm:w-1/2">
        <SignUp />
      </div>
    </div>
  );
};
export default page;
