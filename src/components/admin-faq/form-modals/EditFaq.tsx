import { useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import { UpdateFaqs } from "~/store/faq-store";

interface Properties {
  onClose: () => void;
  faqs: {
    id: string;
    question: string;
    answer: string;
    category: string;
  };
  callback: boolean;
  setCallback: (callback: boolean) => void;
}

const EditFAQ = (properties: Properties) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setQuestion(properties?.faqs?.question || "");
    setAnswer(properties?.faqs?.answer || "");
    setCategory(properties?.faqs?.category || "");
  }, [properties?.faqs]);

  const { toast } = useToast();

  const handleUpdateFaq = async () => {
    setLoading(true);

    if (answer === "" || question === "") {
      toast({
        title: "Error",
        description: "Inputs cannot be empty",
        variant: "critical",
      });
      setLoading(false);
      return;
    }

    const payload = {
      question,
      answer,
      category,
    };

    const result = await UpdateFaqs(payload, properties?.faqs?.id);
    if (result?.status === 200 || result?.status === 201) {
      properties?.setCallback(!properties?.callback);
      toast({
        title: "Success",
        description: "FAQ updated successfully",
        variant: "default",
      });
      properties?.onClose();
      setLoading(false);
    } else {
      toast({
        title: "Error",
        description: result?.error,
        variant: "critical",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex w-full justify-end">
        <CustomButton
          variant="default"
          onClick={properties.onClose}
          className="h-[30px] w-[30px] rounded-full bg-neutral-5"
        >
          x
        </CustomButton>
      </div>
      <h2 className="text-center text-[17px] font-bold md:text-[22px]">
        Edit Question and Answer
      </h2>
      <div className="flex flex-col">
        <label htmlFor="question" className="text-secondary-50">
          Question
        </label>
        <CustomInput
          inputType="text"
          name="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Question"
          className="placeholder:text-[12px]"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="answer" className="text-secondary-50">
          Category
        </label>
        <Select onValueChange={(value) => setCategory(value)} value={category}>
          <SelectTrigger className="text-primary focus:ring-primary focus-visible:ring-primary focus:outline-none focus:ring-1 focus-visible:ring-1 focus-visible:ring-offset-0">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="pricing">Pricing</SelectItem>
            <SelectItem value="policy">Policy</SelectItem>
            <SelectItem value="general">General</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="answer" className="text-secondary-50">
          Answer
        </label>
        <textarea
          draggable={false}
          rows={6}
          name="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="write answer to question here"
          className="rounded-[8px] border-[2px] border-neutral-20 p-[8px] outline-none placeholder:text-[12px]"
        ></textarea>
      </div>
      <div className="mt-[20px] border-t-[5px] border-t-neutral-10 pt-[20px]">
        <CustomButton
          variant="primary"
          className="w-full"
          onClick={handleUpdateFaq}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              Saving...
              <LoadingSpinner />
            </span>
          ) : (
            "Save"
          )}
        </CustomButton>
      </div>
    </>
  );
};

export default EditFAQ;
