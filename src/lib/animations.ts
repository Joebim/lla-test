import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.querySelector("#banner-1") as HTMLElement;
  const bannerTwo = document.querySelector("#banner-2") as HTMLElement;
  const bannerThree = document.querySelector("#banner-3") as HTMLElement;
  const bannerFour = document.querySelector("#banner-4") as HTMLElement;

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const TL = gsap.timeline();

    TL.set([bannerOne, bannerTwo, bannerThree, bannerFour], { yPercent: 0 }).to(
      [bannerOne, bannerTwo, bannerThree, bannerFour],
      {
        yPercent: 100,
        stagger: 0.2,
      },
    );
  }
};
export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.querySelector("#banner-1") as HTMLElement;
  const bannerTwo = document.querySelector("#banner-2") as HTMLElement;
  const bannerThree = document.querySelector("#banner-3") as HTMLElement;
  const bannerFour = document.querySelector("#banner-4") as HTMLElement;

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const TL = gsap.timeline();

    TL.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
