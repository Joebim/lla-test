/* eslint-disable unicorn/prefer-module */
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "rgb(var(--secondary-120))",
        neutral: {
          10: "rgb(var(--neutral-10))",
          20: "rgb(var(--neutral-20))",
          30: "rgb(var(--neutral-30))",
          40: "rgb(var(--neutral-40))",
          50: "rgb(var(--neutral-50))",
          60: "rgb(var(--neutral-60))",
          70: "rgb(var(--neutral-70))",
          80: "rgb(var(--neutral-80))",
          90: "rgb(var(--neutral-90))",
          100: "rgb(var(--neutral-100))",
          110: "rgb(var(--neutral-110))",
          120: "rgb(var(--neutral-120))",
          130: "rgb(var(--neutral-130))",
          140: "rgb(var(--neutral-140))",
          150: "rgb(var(--neutral-150))",
        },
        primary: {
          10: "rgb(var(--primary-10))",
          20: "rgb(var(--primary-20))",
          30: "rgb(var(--primary-30))",
          40: "rgb(var(--primary-40))",
          50: "rgb(var(--primary-50))",
          60: "rgb(var(--primary-60))",
          70: "rgb(var(--primary-70))",
          80: "rgb(var(--primary-80))",
          90: "rgb(var(--primary-90))",
          100: "rgb(var(--primary-100))",
          110: "rgb(var(--primary-110))",
          120: "rgb(var(--primary-120))",
          130: "rgb(var(--primary-130))",
          140: "rgb(var(--primary-140))",
          150: "rgb(var(--primary-150))",
        },
        pink: {
          10: "rgb(var(--pink-10))",
          20: "rgb(var(--pink-20))",
          30: "rgb(var(--pink-30))",
          40: "rgb(var(--pink-40))",
          50: "rgb(var(--pink-50))",
          60: "rgb(var(--pink-60))",
          70: "rgb(var(--pink-70))",
          80: "rgb(var(--pink-80))",
          90: "rgb(var(--pink-90))",
          100: "rgb(var(--pink-100))",
          110: "rgb(var(--pink-110))",
          120: "rgb(var(--pink-120))",
          130: "rgb(var(--pink-130))",
          140: "rgb(var(--pink-140))",
        },
        purple: {
          10: "rgb(var(--purple-10))",
          20: "rgb(var(--purple-20))",
          30: "rgb(var(--purple-30))",
          40: "rgb(var(--purple-40))",
          50: "rgb(var(--purple-50))",
          60: "rgb(var(--purple-60))",
          70: "rgb(var(--purple-70))",
          80: "rgb(var(--purple-80))",
          90: "rgb(var(--purple-90))",
          100: "rgb(var(--purple-100))",
          110: "rgb(var(--purple-110))",
          120: "rgb(var(--purple-120))",
          130: "rgb(var(--purple-130))",
          140: "rgb(var(--purple-140))",
        },
        secondary: {
          10: "rgb(var(--secondary-10))",
          20: "rgb(var(--secondary-20))",
          30: "rgb(var(--secondary-30))",
          40: "rgb(var(--secondary-40))",
          50: "rgb(var(--secondary-50))",
          60: "rgb(var(--secondary-60))",
          70: "rgb(var(--secondary-70))",
          80: "rgb(var(--secondary-80))",
          90: "rgb(var(--secondary-90))",
          100: "rgb(var(--secondary-100))",
          110: "rgb(var(--secondary-110))",
          120: "rgb(var(--secondary-120))",
        },
        success: {
          10: "rgb(var(--success-10))",
          20: "rgb(var(--success-20))",
          30: "rgb(var(--success-30))",
          40: "rgb(var(--success-40))",
          50: "rgb(var(--success-50))",
          60: "rgb(var(--success-60))",
          70: "rgb(var(--success-70))",
          80: "rgb(var(--success-80))",
          90: "rgb(var(--success-90))",
          100: "rgb(var(--success-100))",
          120: "rgb(var(--success-120))",
          130: "rgb(var(--success-130))",
          140: "rgb(var(--success-140))",
          150: "rgb(var(--success-150))",
          160: "rgb(var(--success-160))",
        },
        critical: {
          10: "rgb(var(--critical-10))",
          20: "rgb(var(--critical-20))",
          30: "rgb(var(--critical-30))",
          40: "rgb(var(--critical-40))",
          50: "rgb(var(--critical-50))",
          60: "rgb(var(--critical-60))",
          70: "rgb(var(--critical-70))",
          80: "rgb(var(--critical-80))",
          90: "rgb(var(--critical-90))",
          100: "rgb(var(--critical-100))",
          110: "rgb(var(--critical-110))",
          120: "rgb(var(--critical-120))",
          130: "rgb(var(--critical-130))",
          150: "rgb(var(--critical-150))",
          160: "rgb(var(--critical-160))",
        },
        "transparent-black": {
          5: "rgba(var(--transparent-black-5))",
          10: "rgba(var(--transparent-black-10))",
          15: "rgba(var(--transparent-black-15))",
          20: "rgba(var(--transparent-black-20))",
          25: "rgba(var(--transparent-black-25))",
          30: "rgba(var(--transparent-black-30))",
          35: "rgba(var(--transparent-black-35))",
          40: "rgba(var(--transparent-black-40))",
          45: "rgba(var(--transparent-black-45))",
          50: "rgba(var(--transparent-black-50))",
          55: "rgba(var(--transparent-black-55))",
          60: "rgba(var(--transparent-black-60))",
          65: "rgba(var(--transparent-black-65))",
          70: "rgba(var(--transparent-black-70))",
          75: "rgba(var(--transparent-black-75))",
        },
        "transparent-white": {
          10: "rgba(var(--transparent-white-10))",
          15: "rgba(var(--transparent-white-15))",
          20: "rgba(var(--transparent-white-20))",
          25: "rgba(var(--transparent-white-25))",
          30: "rgba(var(--transparent-white-30))",
          35: "rgba(var(--transparent-white-35))",
          40: "rgba(var(--transparent-white-40))",
          45: "rgba(var(--transparent-white-45))",
          50: "rgba(var(--transparent-white-50))",
          55: "rgba(var(--transparent-white-55))",
          60: "rgba(var(--transparent-white-60))",
          65: "rgba(var(--transparent-white-65))",
          70: "rgba(var(--transparent-white-70))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        abel: ["Abel"],
        inter: ["Inter"],
        lilita: ["Lilita-One"],
        axiformaSemiBold: ["Axiforma-SemiBold", "sans-serif"],
        axiformaThin: ["Axiforma-Thin", "sans-serif"],
        axiforma: ["Axiforma", "sans-serif"],
        axiformaMediumItalic: ["Axiforma-MediumItalic", "sans-serif"],
        axiformaBlack: ["Axiforma-Black", "sans-serif"],
        axiformaBlackItalic: ["Axiforma-BlackItalic", "sans-serif"],
        axiformaHeavy: ["Axiforma-Heavy", "sans-serif"],
        axiformaMedium: ["Axiforma-Medium", "sans-serif"],
        axiformaBoldItalic: ["Axiforma-BoldItalic", "sans-serif"],
        axiformaExtraBoldItalic: ["Axiforma-ExtraBoldItalic", "sans-serif"],
        axiformaBook: ["Axiforma-Book", "sans-serif"],
        axiformaLight: ["Axiforma-Light", "sans-serif"],
        axiformaThinItalic: ["Axiforma-ThinItalic", "sans-serif"],
        axiformaBold: ["Axiforma-Bold", "sans-serif"],
        axiformaLightItalic: ["Axiforma-LightItalic", "sans-serif"],
        axiformaSemiBoldItalic: ["Axiforma-SemiBoldItalic", "sans-serif"],
        axiformaItalic: ["Axiforma-Italic", "sans-serif"],
        axiformaBookItalic: ["Axiforma-BookItalic", "sans-serif"],
        axiformaExtraBold: ["Axiforma-ExtraBold", "sans-serif"],
        axiformaHeavyItalic: ["Axiforma-HeavyItalic", "sans-serif"],
      },
      boxShadow: {
        spread: "0px 1px 18px 0px #0A39B01F",
      },
      backgroundImage: {
        heroImageOne: "url('/images/_Hero_Image.png')",
        heroImageTwo: "url('/images/_Hero_Image_2.png')",
        heroImageThree: "url('/images/_Hero_Image_3.png')",
        heroImageFour: "url('/images/_Hero_Image_4.png')",
        card: "url('/images/Cards.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.3" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-1": "pulse 1.5s ease-in-out infinite",
        "pulse-2": "pulse 1.5s ease-in-out 0.5s infinite",
        "pulse-3": "pulse 1.5s ease-in-out 1s infinite",
        "beat": "beat 1s ease-in-out infinite",
      },
    },
    boxShadow: {
      "inner-custom-1": "inset 0 2px 10px 0 rgba(214, 192, 255, 0.25)",
      "inner-custom-2": "inset 0 2px 10px 0 #1F0451",
      "custom-drop": "0 6px 4px 0 rgba(0, 0, 0, 0.25)",
      "inner-button": "0px -1px 4px 0px #00000012 inset",
      "dropdown": "0px 4px 4px 0px #D3D3D354",
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@mertasan/tailwindcss-variables"),
  ],
} satisfies Config;

export default config;
