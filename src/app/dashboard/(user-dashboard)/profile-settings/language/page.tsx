import LearningLanguage from "~/components/select-language/learning-language";
import NativeLanguage from "~/components/select-language/native-language";

const page = () => {
  return (
    <div className="flex flex-col gap-12">
      <NativeLanguage />
      <LearningLanguage />
    </div>
  );
};

export default page;
