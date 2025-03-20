import localFont from "next/font/local";

export const GlensCity = localFont({
  src: [
    {
      path: "../public/fonts/GlensCity-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/GlensCity-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-glens-city",
  display: "swap",
});

export const Avenir = localFont({
  src: [
    {
      path: "../public/fonts/Avenir-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir-Heavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});
