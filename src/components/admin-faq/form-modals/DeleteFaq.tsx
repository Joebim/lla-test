"use client";

import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { useToast } from "~/components/ui/use-toast";
import { DeleteFaqs } from "~/store/faq-store";

interface Properties {
  onClose: () => void;
  faqs: {
    id: string;
    question: string;
    answer: string;
    category: string;
  };
  callback: boolean;
  setCallback: (value: boolean) => void;
}

const DeleteFaq = (properties: Properties) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleDeleteFaq = async () => {
    setLoading(true);

    const response = await DeleteFaqs(properties?.faqs?.id);
    if (response?.status === 200 || response?.status === 201) {
      properties?.setCallback(!properties?.callback);
      toast({
        title: "Success",
        description: "Faq Deleted successfully",
        variant: "default",
      });
      properties?.onClose();
      setLoading(false);
    } else {
      toast({
        title: "Error",
        description: response?.error,
        variant: "critical",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="mb-[10px] text-center text-[17px] font-bold">
        Delete FAQ?
      </h3>
      <p className="text-center text-[13px] font-medium text-secondary-90">
        Are you sure you want to delete this FAQ? This action cannot be undone.
      </p>
      <div className="flex w-full items-center gap-2 border-t-[5px] border-t-neutral-5 py-[15px]">
        <CustomButton
          variant="neutral"
          className="w-full"
          onClick={properties.onClose}
        >
          Cancel
        </CustomButton>
        <CustomButton
          variant="default"
          onClick={handleDeleteFaq}
          className="w-full bg-critical-90 text-white"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              Deleting...
              <LoadingSpinner />
            </span>
          ) : (
            "Delete"
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteFaq;
