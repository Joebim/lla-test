import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/input/CustomInput";

interface properties {
  question: string;
  answer: string;
  error: string;
  onClose: () => void;
  onAdd: () => void;
  onQuestionChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onAnswerChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
}

const CreateFAQ = ({
  question,
  answer,
  onQuestionChange,
  onAnswerChange,
  onAdd,
  onClose,
  error,
}: properties) => {
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
          onChange={onQuestionChange}
          placeholder="Question"
          className="placeholder:text-[12px]"
        />
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
          onChange={onAnswerChange}
          placeholder="write answer to question here"
          className="rounded-[8px] border-[2px] border-neutral-20 p-[8px] outline-none placeholder:text-[12px]"
        ></textarea>
        <small className="mt-[5px] font-medium text-critical-80">{error}</small>
      </div>
      <div className="mt-[20px] border-t-[5px] border-t-neutral-10 pt-[20px]">
        <CustomButton variant="primary" className="w-full" onClick={onAdd}>
          Add Question
        </CustomButton>
      </div>
    </>
  );
};

export default CreateFAQ;
