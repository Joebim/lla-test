import CustomButton from "../common/common-button/common-button";
import LogoFooter from "../light-navbar/logo-component-footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-100 py-12 text-white">
      <div className="w-full">
        <div className="flex w-full flex-wrap justify-center lg:justify-between px-[5%] pb-16">
          <div className="mb-6 w-full md:mb-0 md:w-[30%] flex flex-col gap-4 items-center md:items-start ">
            <LogoFooter />
            <p className="ml-0 text-sm md:text-xl text-transparent-white-75 font-normal ">Your go-to language learning app.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 md:w-[60%] ">
            <div className="mb-6 flex w-full justify-end md:mb-0 md:w-1/3">
              <div>
                <h3 className="mb-2 text-base md:text-xl font-medium text-secondary-80">Product</h3>
                <ul>
                  <li>
                    <a href="#" className="text-sm md:text-xl text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="text-sm md:text-xl text-white">
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 flex w-full justify-start  md:justify-end md:mb-0 md:w-1/3">
              <div>
                <h3 className="mb-2 text-base md:text-xl font-medium text-secondary-80">Company</h3>
                <ul>
                  <li>
                    <a href="/about-us" className="text-sm md:text-xl text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm md:text-xl text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/faqs" className="text-sm md:text-xl text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm md:text-xl text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6 flex w-full justify-end md:mb-0 md:w-1/3">
              <div>
                <h3 className="mb-2 text-base md:text-xl font-medium text-secondary-80 ">Legal</h3>
                <ul>
                  <li>
                    <a href="/terms-of-use" className="text-sm md:text-xl text-white">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm md:text-xl text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm md:text-xl text-white">
                      Legal Centre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-dotted border-gray-700 px-[5%] py-10">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-6 w-full text-white md:mb-0 md:w-1/2">
              <h3 className="mb-2 text-xl font-semibold">Subscribe Now</h3>
              <div className="flex flex-col gap-1 text-sm font-normal">
                <p>Join our newsletter to stay up-to-date</p>
                <span>with features and releases.</span>
              </div>
            </div>
            <div className="mb-6 w-full md:mb-0 md:w-1/2">
              <form className="flex items-center">
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
            </div>
          </div>
        </div>
        <div className="border-t border-dotted border-gray-700 pt-16 text-center text-white">
          <p>2024 © Delve. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
