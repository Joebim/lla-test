"use client";

import { Inbox, Plus } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/components/common/common-button";
import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import useMediaStore from "~/store/media-library-store";
import { CollectionDataType } from "../../../../../../config/types";

interface Properties {
  dataType: CollectionDataType;
}
const NoCollection = ({ dataType }: Properties) => {
  const { addCollection } = useMediaStore((state) => state);
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleCreateCollection = () => {
    if (newCollectionName.trim() !== "") {
      addCollection({
        id: uuidv4(),
        type: dataType,
        title: newCollectionName,
        images: [],
      });
      setNewCollectionName("");
    }
  };
  return (
    <div className="flex-1 items-center justify-center p-8">
      <div className="group flex h-full w-full items-center justify-center rounded-[9px] border-2 border-dashed">
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-6">
          <Inbox className="h-[56px] w-[56px] text-gray-200" />
          <p className="text-center">
            You have not added any {dataType}. No worries! <br /> You can add
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
                  Give your {dataType} collection a title to easily find it.
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
  );
};

export default NoCollection;
