"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { animatePageOut } from "~/lib/animations";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-110 hover:bg-secondary-100 focus:bg-secondary-100 active:bg-secondary-120 text-white  shadow disabled:bg-secondary-80",
        "secondary-two":
          "bg-white text-secondary-110  shadow-sm border-neutral-40 border-[2px] border-solid hover:bg-neutral-10 hover:bg-neutral-50 hover:text-secondary-100 focus:text-secondary-100 focus:bg-neutral-10 focus:bg-neutral-50 active:bg-neutral-30 active:border-neutral-40 active:text-secondary-120",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "border border-primary text-primary hover:bg-primary hover:text-white transition duration-200 focus:outline-none",
        "primary-two":
          "bg-primary-10 text-primary-100 shadow font-[500] hover:bg-neutral-40 focus:bg-neutral-40 active:bg-neutral-40 active:text-primary-130 disabled:bg-primary-10",
      },
      size: {
        default: "h-8 min-[500px]:h-10 px-4 py-2 rounded-full",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-16 rounded-md py-2 px-4 text-base",
        icon: "size-8 min-[500px]:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href: string;
}

const TransitionLink = React.forwardRef<HTMLButtonElement, ButtonProperties>(
  (
    { className, variant, size, asChild = false, href, ...properties },
    reference,
  ) => {
    const Comp = asChild ? Slot : "button";
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
      if (pathname !== href) {
        animatePageOut(href, router);
      }
    };
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={reference}
        onClick={handleClick}
        {...properties}
      />
    );
  },
);
TransitionLink.displayName = "TransitionLink";

export { TransitionLink, buttonVariants };
