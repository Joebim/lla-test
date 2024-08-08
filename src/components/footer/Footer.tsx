import CustomButton from "../common/common-button/common-button";
import LogoFooter from "../light-navbar/logo-component-footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-100 py-12 text-white">
      <div className="w-full">
        <div className="flex w-full flex-wrap justify-center px-[5%] pb-16 lg:justify-between">
          <div className="mb-6 flex w-full flex-col items-center gap-4 md:mb-0 md:w-[30%] md:items-start">
            <LogoFooter />
            <p className="text-transparent-white-75 ml-0 text-sm font-normal md:text-xl">
              Your go-to language learning app.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-5 md:w-[60%] md:flex-row">
            <div className="mb-6 flex w-full justify-end md:mb-0 md:w-1/3">
              <div>
                <h3 className="mb-2 text-base font-medium text-secondary-80 md:text-xl">
                  Product
                </h3>
                <ul>
                  <li>
                    <a href="#" className="text-sm text-white md:text-xl">
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-it-works"
                      className="text-sm text-white md:text-xl"
                    >
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 flex w-full justify-start md:mb-0 md:w-1/3 md:justify-end">
              <div>
                <h3 className="mb-2 text-base font-medium text-secondary-80 md:text-xl">
                  Company
                </h3>
                <ul>
                  <li>
                    <a
                      href="/about-us"
                      className="text-sm text-white md:text-xl"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white md:text-xl">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/faqs" className="text-sm text-white md:text-xl">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white md:text-xl">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 flex w-full justify-end md:mb-0 md:w-1/3">
              <div>
                <h3 className="mb-2 text-base font-medium text-secondary-80 md:text-xl">
                  Legal
                </h3>
                <ul>
                  <li>
                    <a
                      href="/terms-of-use"
                      className="text-sm text-white md:text-xl"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white md:text-xl">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-white md:text-xl">
                      Legal Centre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-dashed border-transparent-white-40 px-[5%] py-10">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-6 flex w-full flex-col items-center text-white md:mb-0 md:w-1/2 md:items-start">
              <h3 className="mb-2 text-xl font-semibold md:text-[28px]">
                Subscribe Now
              </h3>
              <div className="flex flex-col gap-1 text-base font-normal">
                <p className="text-transparent-white-75 max-w-[414px] text-center text-base tracking-wider md:text-start md:text-xl">
                  Join our newsletter to stay up-to-date with features and
                  releases.
                </p>
                <span></span>
              </div>
            </div>
            <div className="mb-6 w-full md:mb-0 md:w-1/2">
              <form className="hidden items-center md:flex">
                <div className="relative flex w-full items-center justify-center">
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full rounded-3xl px-4 py-5 focus:outline-none"
                  />
                  <CustomButton
                    variant="primary"
                    className="absolute right-5 px-6 py-5"
                  >
                    Subscribe
                  </CustomButton>
                </div>
              </form>
              <div className="flex flex-col gap-[14px] md:hidden">
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full h-12 rounded-[10px] px-3 py-[18px] focus:outline-none border border-neutral-40"
                />
                <CustomButton
                  variant="primary"
                  className=" h-12 w-full rounded-[12px] px-8 py-[10px] text-[18px] font-semibold"
                >
                  Subscribe
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-transparent-white-40 pt-16 text-center text-white">
          <p>2024 © Delve. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
