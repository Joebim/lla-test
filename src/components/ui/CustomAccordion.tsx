import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface AccordionProperties {
  title: string;
  content: string;
  alwaysActive?: boolean;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProperties> = ({
  title,
  content,
  alwaysActive = false,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    if (!alwaysActive) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mb-2 w-full items-center justify-center rounded-lg">
      <div
        className="shadow flex cursor-pointer flex-col gap-3 rounded-2xl p-4"
        onClick={toggleAccordion}
      >
        <div className="flex flex-row items-center gap-3">
          <span
            className={`transition-transform mr-2 transform rounded-full border p-1 duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? (
              <Minus size={16} className="text-secondary-60" />
            ) : (
              <Plus size={16} className="text-primary-100" />
            )}
          </span>
          <span className="font-lilita text-[18px] font-medium text-secondary-120">
            {title}
          </span>
        </div>
        {/* {alwaysActive && <span className="text-blue-500">Always Active</span>} */}
        <div
          className={`transition-all overflow-hidden duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto w-[90%] border-t p-4">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
