import email from "../../../../public/images/aboutAsset/email.svg";
import note from "../../../../public/images/aboutAsset/note.svg";
import phone from "../../../../public/images/aboutAsset/pone.svg";
import Contact from "./Contact";
import ContactInput from "./ContactInput";
import Map from "./Map";

const ThirdHero = () => {
  return (
    <article className="w-full bg-secondary-120 px-[11px] py-[17px] lg:px-[40px] lg:py-[80px]">
      <div className="border-[8px] border-solid border-transparent-white-15 bg-white">
        <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-[23px] border-[16px] border-solid border-[#FFFFFFCC] p-[24px] lg:gap-[34px] lg:p-[48px]">
          <div className="text-center font-axiformaSemiBold font-semibold text-secondary-120">
            <h1 className="whitespace-nowrap text-[24px] leading-[36px] tracking-[0.02em] md:text-[48px] md:leading-[72px] lg:tracking-[0.06em]">
              Get in <span className="text-primary-110">Touch</span>
            </h1>
            <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
              Whether you have a question, feedback, or need assistance, our
              team is here to help.
            </p>
          </div>

          {/* Input */}
          <div className="w-full lg:flex lg:gap-[81px]">
            {/* form */}
            <div className="flex w-full flex-col gap-[56px] lg:w-[557px]">
              <form className="flex flex-col gap-[45px]">
                <div className="flex flex-col gap-[24px]">
                  <ContactInput
                    label="Your Name"
                    type="text"
                    placeholder="John Doe"
                    name="name"
                  />
                  <ContactInput
                    label="Your Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    name="email"
                  />

                  <div className="">
                    <label
                      htmlFor="message"
                      className="font-axiformaSemiBold text-[16px] font-semibold leading-[24px] text-secondary-120"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      required
                      className="w-full resize-none rounded-[10px] border border-solid border-neutral-40 bg-neutral-20 px-[12px] py-[10px] font-axiforma text-[18px] capitalize leading-[28px] text-neutral-80 outline-none"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[59px] border-b border-solid border-primary-120 bg-primary-100 px-[24px] py-[10px] font-axiformaBold text-[16px] font-bold leading-[24px] text-white md:text-[20px] md:leading-[30px] lg:px-[32px]"
                >
                  SEND
                </button>
              </form>
              {/* contact type */}
              <div className="flex flex-wrap gap-[44px] lg:flex-nowrap">
                <Contact
                  image={phone}
                  type="phone"
                  contactInfo="+244 906 7059 501"
                />
                <Contact image={note} type="fax" contactInfo="01 2345678" />
                <Contact
                  image={email}
                  type="email"
                  contactInfo=" info@delve.com"
                />
              </div>
            </div>
            {/* MAP */}
            <Map />
          </div>
        </div>
      </div>
    </article>
  );
};
export default ThirdHero;
