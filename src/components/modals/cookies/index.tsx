"use client";

import Image from "next/image";
import Link from "next/link";

import CustomButton from "~/components/common/common-button/common-button";
import cookiesImg from "../../../../public/images/cookies.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

export function Cookies() {
  /* const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []); */

  return (
    <Dialog /* open={isVisible} onOpenChange={setIsVisible} */>
      <DialogTrigger asChild>
        <CustomButton variant="primary-two">View Cookies</CustomButton>
      </DialogTrigger>
      <DialogContent className="max-w-sm gap-2 bg-neutral-10 p-0 outline-none transition-all sm:max-w-[702px] sm:rounded-3xl">
        <DialogHeader className="space-y-0 border bg-white p-6 sm:gap-3 sm:space-y-0 sm:rounded-t-3xl sm:px-9 sm:py-8">
          <div className="mx-auto max-sm:hidden">
            <Image src={cookiesImg} alt="Cookies image" />
          </div>
          <DialogTitle className="text-left text-2xl sm:pt-3 sm:text-center">
            <span className="w-11/12 sm:hidden">Cookies Preferences</span>
            <span className="max-sm:hidden">
              Can we use cookies to personalise your experience?
            </span>
          </DialogTitle>
          <DialogDescription className="text-left text-lg max-sm:text-balance max-sm:pb-2 max-sm:pt-6 sm:text-center">
            To enhance your gaming and language learning experience, LingoDash
            uses cookies. By continuing to use our app, you agree to our use of
            cookies as described in our&nbsp;
            <Link
              href="/"
              className="border-b border-primary-100 text-primary-100"
            >
              Privacy Policy.
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-center gap-5 bg-white px-9 py-6 *:rounded-[59px] sm:justify-center sm:gap-6 sm:rounded-b-3xl sm:py-9">
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-neutral-100 text-base sm:hidden"
              size="lg"
              variant="neutral"
              /* onClick={() => setIsVisible(false)} */
            >
              Reject All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-primary-100 text-base sm:hidden"
              size="lg"
              variant="primary"
              /* onClick={() => setIsVisible(false)} */
            >
              Accept All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-neutral-100 text-base max-sm:hidden"
              size="lg"
              variant="neutral"
              /* onClick={() => setIsVisible(false)} */
            >
              Reject All Cookies
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              className="w-full border border-primary-100 text-base max-sm:hidden"
              size="lg"
              variant="primary"
              /* onClick={() => setIsVisible(false)} */
            >
              Accept All Cookies
            </CustomButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
