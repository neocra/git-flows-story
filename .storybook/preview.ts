import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "1. git flow"],
      },
    },
  },
};

export default preview;
