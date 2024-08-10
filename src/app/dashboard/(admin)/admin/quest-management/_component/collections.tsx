"use client";

import clsx from "clsx";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CustomButton from "~/components/common/common-button/common-button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { CollectionDataType, CollectionType } from "../types";

interface Properties {
  collections: CollectionType[];
  dataType: CollectionDataType;
}
const Collections = ({ collections, dataType }: Properties) => {
  const collectionsToRender = collections.filter(
    (collection) => collection.type === dataType,
  );
  return (
    <ScrollArea className="h-[400px] w-full">
      <div className="flex flex-1 flex-col gap-6 p-6">
        {collectionsToRender.map((collection) => {
          return (
            <div
              key={collection.id}
              className="w-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border"
            >
              <div className="flex w-full items-center gap-[10px] self-stretch rounded-tl-[10px] rounded-tr-[10px] bg-[#F8FAFB] px-4 py-2">
                <span> {collection.title}</span>
                <Link
                  className="ml-auto"
                  href={`/dashboard/admin/quest-management/${dataType}/${collection.id}`}
                >
                  <CustomButton size="icon">
                    <Link2 />
                  </CustomButton>
                </Link>
              </div>
              <div className="flex min-h-40 w-full gap-3 px-2 py-3">
                {collection.images.map((img) => (
                  <div key={img.id} className="flex-col gap-5">
                    <div className="group relative h-[200px] w-full overflow-hidden">
                      <div className="absolute inset-0 z-20 hidden rounded-[10px] bg-transparent-black-30 p-4 group-hover:block group-hover:cursor-pointer">
                        <Checkbox
                          className={clsx(
                            "rounded=[10px] h-7 w-7 border data-[state=checked]:bg-[#FE5900] data-[state=checked]:text-white",
                          )}
                        />
                      </div>
                      <Image
                        src={img.url}
                        alt={`${dataType} collections`}
                        fill
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[10px] border-[3px] border-transparent transition-all group-hover:border-[#888]"
                      />
                    </div>
                    <Input
                      disabled
                      value={collection.title}
                      className="rounded-[10px] focus:outline-offset-0 focus-visible:outline-offset-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default Collections;
