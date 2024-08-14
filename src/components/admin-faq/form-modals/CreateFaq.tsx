"use client";

import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import { CreateFaqs } from "~/store/faq-store";

interface properties {
  callback: boolean;
  setCallback: (value: boolean) => void;
  onClose: () => void;
}

const CreateFAQ = ({ callback, setCallback, onClose }: properties) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const { toast } = useToast();

  const handleAddFAQ = async () => {
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

    const result = await CreateFaqs(payload);
    // eslint-disable-next-line no-console
    console.log(result);

    if (result?.status === 200 || result?.status === 201) {
      setCallback(!callback);
      toast({
        title: "Success",
        description: "Faq created successfully",
        variant: "default",
      });

      onClose();
      setLoading(false);
    } else {
      toast({
        title: "Error",
        description: result?.error,
        variant: "critical",
      });
      setLoading(false);
      setCallback(!callback);
    }
  };

  return (
    <>
      <div className="flex w-full justify-end">
        <CustomButton
          variant="default"
          onClick={onClose}
          className="h-[30px] w-[30px] rounded-full bg-neutral-5"
        >
          x
        </CustomButton>
      </div>
      <h2 className="text-center text-[17px] font-bold md:text-[22px]">
        Add New Question and Answer
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
        <label htmlFor="question" className="text-secondary-50">
          Category
        </label>
        <Select onValueChange={(value) => setCategory(value)} value={category}>
          <SelectTrigger className="text-primary rounded-[10px] focus:outline-none">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Pricing">Pricing</SelectItem>
            <SelectItem value="Policy">Policy</SelectItem>
            <SelectItem value="General">General</SelectItem>
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
          onClick={handleAddFAQ}
        >
          {loading ? "Adding..." : "Add Question"}
        </CustomButton>
      </div>
    </>
  );
};

export default CreateFAQ;
