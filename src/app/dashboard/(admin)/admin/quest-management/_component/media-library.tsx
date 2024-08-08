"use client";

import clsx from "clsx";
import { Edit, Inbox, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import { Checkbox } from "~/components/ui/checkbox";
import { ScrollArea } from "~/components/ui/scroll-area";
import useBackgroundsStore from "~/store/background";

const MediaLibrary = () => {
  const pathname = usePathname();
  const [collection, setCollection] = useState("Collection 01");
  const fileInputReference = useRef(null);
  const { addImageToCollection, collections } = useBackgroundsStore();

  const links = [
    { label: "Backgrounds", route: "backgrounds" },
    { label: "Characters", route: "characters" },
    { label: "Objects", route: "objects" },
    { label: "Animations", route: "animations" },
  ];

  const getLinkClassName = (route: string) => {
    return pathname.includes(route) ? "text-blue-500" : "text-black";
  };

  const handleUploadClick = () => {
    fileInputReference.current.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    for (const file of files) {
      const reader = new FileReader();

      reader.addEventListener("load", (event) => {
        if (!event.target?.result) return;
        const image = {
          id: `${file.name}-${Date.now()}`,
          url: event.target.result,
        };
        addImageToCollection(image);
      });

      reader.readAsDataURL(file);
    }
  };

  console.log(collections);

  return (
    <div className="flex min-h-[600px] w-full flex-col overflow-hidden rounded-[10px] border">
      <div className="flex w-full border-b">
        <div className="flex w-[200px] items-center justify-center border-r p-6 text-lg">
          Media Library
        </div>
        <div className="flex flex-1 items-center justify-center p-6"></div>
      </div>
      <div className="flex h-full flex-1">
        <div className="w-[200px] border-r bg-[#F8FAFB]">
          <ul>
            {links.map((link) => (
              <li key={link.route} className={getLinkClassName(link.route)}>
                <Link href={`/admin/quest-management/${link.route}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          {collections.map((r) =>
            r.images.map((img) => (
              <Image
                key={img.id}
                src={img.url}
                alt="background collections"
                width={100}
                height={100}
              />
            )),
          )}
        </div> */}
        <div className="hidden flex-1 items-center justify-center p-8">
          {/* <div className="group flex h-full w-full items-center justify-center rounded-[9px] border-2 border-dashed hover:bg-gray-50">
            <div className="flex w-80 flex-col items-center justify-center bg-white p-6">
              <Inbox />
              <p>
                You have not added any backgrounds. No worries! <br /> You can
                add some now.
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <CustomButton
                    variant="primary"
                    className="flex items-center justify-center"
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
                      Give your background collection a title to easily find it.
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
                      <CustomInput placeholder="Collection 01" />
                    </div>
                  </div>
                  <DialogFooter className="flex w-full items-center justify-between p-4">
                    <Button
                      className="h-[56px] w-full rounded-[59px] border bg-transparent px-[32px] py-[10px] text-black"
                      type="submit"
                    >
                      Close
                    </Button>
                    <Button
                      className="h-[56px] w-full rounded-[59px] bg-[#414141] px-[32px] py-[10px] text-white"
                      type="submit"
                    >
                      Create
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div> */}
        </div>
        <div className="flex flex-1 flex-col gap-6 p-8">
          <div className="flex w-full items-center justify-between rounded-[9px] border px-[20px] py-[12px]">
            <span contentEditable={false}>{collection}</span>
            <div>
              <CustomButton className="border" size="icon">
                <Edit />
              </CustomButton>
              <CustomButton className="border" size="icon">
                <Trash />
              </CustomButton>
            </div>
          </div>
          {collections.length === 0 && (
            <div className="group flex h-full w-full items-center justify-center rounded-[9px] border-2 border-dashed hover:bg-gray-50">
              <div className="flex w-80 flex-col items-center justify-center bg-white p-6">
                <Inbox />
                <p>
                  Start uploading your backgrounds. <br />
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
          {collections.length > 0 && (
            <ScrollArea className="h-[400px]">
              <div className="grid w-full grid-cols-4 gap-x-6 gap-y-4">
                {collections.map((r) =>
                  r.images.map((img) => (
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
                          layout="fill" // required
                          objectFit="cover"
                          className="rounded-[10px] border-[3px] border-transparent transition-all group-hover:border-[#888]"
                        />
                      </div>
                      <CustomInput className="w-full" />
                    </div>
                  )),
                )}
                <div className="flex flex-col gap-5">
                  <button
                    onClick={handleUploadClick}
                    className="group relative flex h-[200px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[10px] border-2 border-dashed hover:bg-gray-50"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <Plus />
                      <span>Add Image</span>
                    </div>
                  </button>
                  <div className="w-full" />
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
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
