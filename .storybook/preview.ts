import type { Preview } from "@storybook/react";
import "../app/tailwind.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    backgrounds: { disable: true },
    docs: { theme: themes.dark },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
