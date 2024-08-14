import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

import { Button } from "~/components/common/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface QuestModalProperties {
  children: ReactNode;
}

export function QuestExitModal({ children }: QuestModalProperties) {
  const [saved, setSaved] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[320px] rounded-[16px] bg-white font-axiforma sm:max-w-[425px]">
        {saved ? (
          <div className="flex h-full w-full flex-col items-center gap-[50px]">
            <DialogHeader className="flex flex-col items-center gap-[6px]">
              <Image
                src="/dashboard/green-badge.svg"
                alt="preview-image"
                width={60}
                height={60}
                className="size-[120px] h-[70px] w-[70px] cursor-pointer rounded-[10px] duration-200 hover:scale-105 sm:h-[100px] sm:w-[100px] sm:rounded-2xl"
              />
              <DialogTitle>Progress saved</DialogTitle>
              <DialogDescription className="text-center">
                Your Quest progress have been saved successfully. You can and
                continue with this quest from the dashboard.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-row items-center gap-[15px]">
              <div className="w-[200px]">
                <DialogTrigger asChild>
                  <Link href="/dashboard/user/quests">
                    <Button
                      variant="primary-two"
                      className="w-full"
                      onClick={() => setSaved(false)}
                    >
                      Proceed to Dashboard
                    </Button>
                  </Link>
                </DialogTrigger>
              </div>
            </DialogFooter>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col gap-[50px]">
            <DialogHeader className="flex flex-col items-center gap-[6px]">
              <DialogTitle>Exit Quest</DialogTitle>
              <DialogDescription className="text-center">
                If you exit the game, you will be able to access the ongoing
                progress, to continue later save progress.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-row items-center gap-[15px]">
              <div className="flex-[1]">
                <Link href="/dashboard/user/quests">
                  <Button variant="primary-two" className="w-full">
                    Exit Quest
                  </Button>
                </Link>
              </div>
              <div className="flex-[1]">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setSaved(true)}
                >
                  Save Progress
                </Button>
              </div>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
