import { Button } from "~/components/common/common-button";
import CustomInput from "~/components/input/CustomInput";

const SupportPage = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-[20px]">
        <div className="flex h-[400px] w-full flex-col gap-[30px] overflow-hidden rounded-[0px] bg-white sm:rounded-[20px]">
          <div className="flex-[0.5] bg-primary-10 px-[15px] py-[20px] text-secondary-120">
            Submit a Request
          </div>
          <div className="flex flex-[10] flex-col gap-[20px] px-[20px]">
            <CustomInput
              placeholder="Username"
              label="Username"
              inputType="text"
              value=""
              className=""
            />
            <CustomInput
              placeholder="Email"
              label="Email"
              inputType="email"
              value=""
              className=""
            />
            <CustomInput
              placeholder="Subject"
              label="Subject"
              inputType="text"
              value=""
              className=""
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-[20px] rounded-[20px] bg-white p-[20px]">
          <CustomInput
            placeholder="Leave your message here."
            label="Description"
            inputType="textarea"
            value=""
            className=""
          />
        </div>
        <div className="flex w-full flex-col gap-[20px] rounded-[20px] bg-white p-[20px]">
          <div className="rounded-[20px] border border-solid border-neutral-50 p-[20px] sm:border-transparent sm:p-0">
            <div className="text-[15px] font-[400]">File Upload(Optional)</div>
            <div className="flex h-[100px] flex-row items-center justify-center">
              <p className="text-[15px] font-[400]">
                <span className="text-primary-100">Add File</span> or drop a
                file here
              </p>
            </div>
          </div>
        </div>
        <Button variant="primary" className="">
          Submit
        </Button>
      </div>
    </>
  );
};

export default SupportPage;
