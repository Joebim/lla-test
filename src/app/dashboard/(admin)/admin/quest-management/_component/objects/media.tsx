"use client";

import clsx from "clsx";
import { Edit, Inbox, Link2, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/components/common/common-button";
import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import useObjectsStore from "~/store/objects";

const ObjectMediaLibrary = ({
  type,
  id,
}: {
  type: "add" | "edit";
  id?: string;
}) => {
  const pathname = usePathname();
  const [newCollectionName, setNewCollectionName] = useState("");
  const { addCollection, collections, addImageToCollection } = useObjectsStore(
    (state) => state,
  );
  const router = useRouter();

  const handleCreateCollection = () => {
    if (newCollectionName.trim() !== "") {
      addCollection({ id: uuidv4(), title: newCollectionName, images: [] });
      setNewCollectionName("");
    }
  };

  const fileInputReference = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputReference.current?.click();
  };

  const links = [
    { label: "Backgrounds", route: "backgrounds" },
    { label: "Characters", route: "characters" },
    { label: "Objects", route: "objects" },
    { label: "Animations", route: "animations" },
  ];

  const getLinkClassName = (route: string) => {
    return pathname.includes(route) ? "bg-[#E9EEF3]" : "text-black";
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    for (const file of files) {
      const reader = new FileReader();

      reader.addEventListener("load", (event) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          const image = {
            id: `${file.name}-${Date.now()}`,
            url: result,
          };
          addImageToCollection(image, id);
        }
      });

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (type === "edit" && collections.length === 0) {
      router.push("/dashboard/admin/quest-management/objects");
    }
  }, [type, collections, router]);

  return (
    <div className="flex min-h-[600px] w-full flex-col overflow-hidden rounded-[10px] border">
      <div className="flex w-full border-b">
        <div className="flex w-[200px] items-center justify-center border-r p-6 text-lg">
          <span className="font-axiformaBold"> Media Library</span>
        </div>
        <div className="flex flex-1 items-center justify-center p-6"></div>
      </div>
      <div className="flex h-full flex-1 flex-col md:flex-row">
        <div className="min-w-[200px] border-r bg-[#F8FAFB]">
          <ul className="mt-8">
            {links.map((link) => (
              <li
                className={clsx(
                  "px-5 py-3 hover:bg-[#E9EEF3]",
                  getLinkClassName(link.route),
                )}
                key={link.route}
              >
                <Link href={`/dashboard/admin/quest-management/${link.route}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {type === "add" && collections.length <= 0 && (
          <div className="flex-1 items-center justify-center p-8">
            <div className="group flex h-full w-full items-center justify-center rounded-[9px] border-2 border-dashed">
              <div className="flex flex-col items-center justify-center gap-4 bg-white p-6">
                <Inbox className="h-8 w-8" />
                <p className="text-center">
                  You have not added any object. No worries! <br /> You can add
                  some now.
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <CustomButton
                      variant="primary"
                      className="flex w-full items-center justify-center"
                    >
                      <Plus /> Create A Collection
                    </CustomButton>
                  </DialogTrigger>
                  <DialogContent className="bg-white p-2 font-axiforma sm:max-w-[400px] lg:rounded-[20px]">
                    <DialogHeader className="gap-1 p-4 pb-0 text-center">
                      <DialogTitle className="text-center font-axiformaBlack text-lg">
                        Name your collection
                      </DialogTitle>
                      <DialogDescription className="text-center text-[12px] text-[#2A425D]">
                        Give your background collection a title to easily find
                        it.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 border-b-2 p-4">
                      <div className="grid grid-cols-1 items-center gap-1">
                        <Label
                          htmlFor="name"
                          className="text-left text-sm text-[#888]"
                        >
                          Title
                        </Label>
                        <CustomInput
                          placeholder="Collection 01"
                          value={newCollectionName}
                          onChange={(event) =>
                            setNewCollectionName(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <DialogFooter className="flex w-full items-center justify-between p-4">
                      <Button
                        className="w-full rounded-[59px] border bg-transparent px-[32px] py-[10px] text-black"
                        type="submit"
                        onClick={() => setNewCollectionName("")}
                      >
                        Close
                      </Button>
                      <Button
                        className="w-full rounded-[59px] bg-[#414141] px-[32px] py-[10px] text-white"
                        onClick={handleCreateCollection}
                      >
                        Create
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}

        {type === "add" && collections.length > 0 && (
          <div className="flex flex-1 flex-col gap-6 p-6">
            {collections.map((collection) => {
              return (
                <div
                  key={collection.id}
                  className="w-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border"
                >
                  <div className="flex items-center gap-[10px] self-stretch rounded-tl-[10px] rounded-tr-[10px] bg-[#F8FAFB] px-4 py-2">
                    <span> {collection.title}</span>
                    <Link
                      href={`/dashboard/admin/quest-management/objects/${collection.id}`}
                    >
                      <CustomButton size="icon" className="ml-auto">
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
                            alt="background collections"
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
        )}
        {type === "edit" && (
          <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex w-full items-center justify-between rounded-[9px] border px-[20px] py-[12px]">
              <span contentEditable={false}>
                {collections.length > 0 ? collections[0].title : ""}
              </span>
              <div className="flex gap-2">
                <CustomButton
                  className="flex items-center justify-center rounded-[59px] border p-2"
                  size="icon"
                  onClick={handleUploadClick}
                >
                  <Plus />
                </CustomButton>
                <input
                  type="file"
                  ref={fileInputReference}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/heic"
                  multiple
                />
                <CustomButton
                  className="flex items-center justify-center rounded-[59px] border p-2"
                  size="icon"
                >
                  <Edit />
                </CustomButton>
                <CustomButton
                  className="flex items-center justify-center rounded-[59px] border p-2"
                  size="icon"
                >
                  <Trash />
                </CustomButton>
              </div>
            </div>
            {collections[0] && collections[0].images.length === 0 && (
              <div className="group flex h-full w-full items-center justify-center rounded-[9px] border-2 border-dashed">
                <div className="flex w-80 flex-col items-center justify-center bg-white p-6">
                  <Inbox />
                  <p>
                    Start uploading your character. <br />
                    Formats supported: PNG, JPG & HEIC.
                  </p>
                  <CustomButton
                    variant="primary"
                    className="flex items-center justify-center"
                    onClick={handleUploadClick}
                  >
                    <Plus /> Upload Files
                  </CustomButton>
                  <input
                    type="file"
                    ref={fileInputReference}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg, image/heic"
                    multiple
                  />
                </div>
              </div>
            )}
            {collections[0] && collections[0].images.length > 0 && (
              <ScrollArea className="h-[400px]">
                <div className="grid w-full grid-cols-4 gap-x-6 gap-y-4">
                  {collections[0].images.map((img) => (
                    <div key={img.id} className="flex flex-col gap-5">
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
                          alt="background collections"
                          fill
                          layout="fill"
                          objectFit="cover"
                          className="rounded-[10px] border-[3px] border-transparent transition-all group-hover:border-[#888]"
                        />
                      </div>
                      <CustomInput className="w-fit rounded-[10px] focus:outline-offset-0 focus-visible:outline-offset-0" />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ObjectMediaLibrary;
