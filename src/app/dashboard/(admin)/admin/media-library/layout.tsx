import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="felx w-full flex-col p-12">
      <div className="mb-6 mt-10 flex flex-col md:mt-0">
        <h1 className="font-axiforma text-xl font-semibold capitalize">
          manage your quests
        </h1>
      </div>
      <>{children}</>
    </div>
  );
};

export default layout;
