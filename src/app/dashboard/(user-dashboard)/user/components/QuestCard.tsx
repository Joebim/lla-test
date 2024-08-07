import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

interface QuestCardProperties {
  id: number;
  title: string;
  image: string;
  numberOfWords: number;
}

const QuestCard = ({
  id,
  image,
  numberOfWords,
  title,
}: QuestCardProperties) => {
  return (
    <>
      <Card className="group border-0 bg-transparent">
        <div className="h-fit w-full overflow-hidden rounded-md ring-2 ring-transparent duration-300 ease-in group-hover:ring-primary-100 md:rounded-2xl">
          <Image
            src={image}
            className="w-full object-cover"
            width={356}
            height={467}
            alt={title}
          />
        </div>
        <CardContent className="mt-2 rounded-2xl p-3 ring-1 ring-neutral-40 duration-300 ease-in group-hover:ring-2 group-hover:ring-primary-100">
          <div className="flex flex-row items-center">
            <div className="mr-auto">
              <CardTitle
                className="whitespace-nowrap text-xs font-semibold capitalize leading-6 tracking-wide text-secondary-120 md:text-sm"
                style={{ fontFamily: "Axiforma" }}
              >
                {title}
              </CardTitle>
              <p
                className="text-xs font-normal leading-4 text-secondary-100"
                style={{ fontFamily: "Axiforma" }}
              >
                {numberOfWords} Words
              </p>
            </div>

            <Link
              href={`/quest-preview/${id}`}
              className="no-underline opacity-0 outline-none duration-300 ease-in group-hover:opacity-100"
            >
              <Button
                style={{ fontFamily: "Axiforma" }}
                className="rounded-full border-0 bg-primary-100 px-7 py-2 text-sm text-white"
              >
                View
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default QuestCard;
