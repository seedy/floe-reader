import "app/globals.css";
import Root from "../components/Root";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Root>
      <Story />
    </Root>
  ),
];
