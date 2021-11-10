import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "Faible-Regular",
    heading: "SpoofTrial-Regular",
    monospace: "Menlo, monospace",
  },
  colors: {
    background: "#FFF8EF",
    text: "#004E4C",
    primary: "#FAA834",
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      mx: "1em",
      fontSize: "17px",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
      fontSize: "17px",
    },
    // secondary: {
    //   color: 'background',
    //   bg: 'secondary',
    // },
  },
  breakpoints: ["600px", "800px", "1200px"],
};
