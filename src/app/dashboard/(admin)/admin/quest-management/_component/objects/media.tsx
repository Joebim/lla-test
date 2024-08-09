"use client";

import clsx from "clsx";
import { Edit, Inbox, Link2, Plus, Trash, Upload } from "lucide-react";
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
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="mr-auto flex items-center justify-start gap-2">
            <Link href={`/dashboard/admin/quest-management/backgrounds`}>
              <span className="text-[#888888]">Object</span>
            </Link>
            <span>/</span>
            <strong className="capitalize">
              <span>{collections[0] ? collections[0].title : "No name"}</span>
            </strong>
          </div>
          <div className="ml-auto flex max-w-[357px] items-center justify-center gap-2 rounded-[7px] border px-3 py-2 focus-within:ring-1 focus-within:ring-primary-100">
            <Input
              placeholder="Search anything here..."
              className="h-fit border-none p-1 focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
            <span className="flex items-center justify-center rounded-[4px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#F6F8FA" />
                <path
                  d="M16 6C15.4696 6 14.9609 6.21071 14.5858 6.58579C14.2107 6.96086 14 7.46957 14 8V16C14 16.5304 14.2107 17.0391 14.5858 17.4142C14.9609 17.7893 15.4696 18 16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14H8C7.46957 14 6.96086 14.2107 6.58579 14.5858C6.21071 14.9609 6 15.4696 6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18C8.53043 18 9.03914 17.7893 9.41421 17.4142C9.78929 17.0391 10 16.5304 10 16V8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10H16C16.5304 10 17.0391 9.78929 17.4142 9.41421C17.7893 9.03914 18 8.53043 18 8C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6Z"
                  stroke="#FFBD99"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="flex items-center justify-center rounded-[4px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#F6F8FA" />
                <path
                  d="M16 6C15.4696 6 14.9609 6.21071 14.5858 6.58579C14.2107 6.96086 14 7.46957 14 8V16C14 16.5304 14.2107 17.0391 14.5858 17.4142C14.9609 17.7893 15.4696 18 16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14H8C7.46957 14 6.96086 14.2107 6.58579 14.5858C6.21071 14.9609 6 15.4696 6 16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18C8.53043 18 9.03914 17.7893 9.41421 17.4142C9.78929 17.0391 10 16.5304 10 16V8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10H16C16.5304 10 17.0391 9.78929 17.4142 9.41421C17.7893 9.03914 18 8.53043 18 8C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6Z"
                  stroke="#FFBD99"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
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
                <Inbox className="h-[56px] w-[56px] text-gray-200" />
                <p className="text-center">
                  You have not added any Objects. No worries! <br /> You can add
                  some now.
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <CustomButton
                      variant="primary"
                      className="flex w-fit items-center justify-center gap-0 px-3"
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
                        Give your object collection a title to easily find it.
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
                      className="ml-auto"
                      href={`/dashboard/admin/quest-management/objects/${collection.id}`}
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
                <button
                  className="flex items-center justify-center rounded-full border p-1"
                  onClick={handleUploadClick}
                >
                  <Plus />
                </button>
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
                <div className="flex w-80 flex-col items-center justify-center gap-2 bg-white p-6 text-center">
                  <Upload className="h-[56px] w-[56px] text-gray-200" />
                  <p className="line-clamp-2">
                    Start uploading your objects.
                    <br />
                    Formats supported{" "}
                    <strong className="whitespace-normal">
                      PNG, JPG & HEIC.
                    </strong>
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
