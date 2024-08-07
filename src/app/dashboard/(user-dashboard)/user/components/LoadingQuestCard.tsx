import { Skeleton } from "~/components/ui/skeleton";

const LoadingQuestCard = () => {
  return (
    <>
      <div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-full rounded-2xl bg-neutral-70 md:h-[380px]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-xl bg-neutral-70 md:w-[250px]" />
            <Skeleton className="h-4 w-[100px] rounded-xl bg-neutral-70" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingQuestCard;
