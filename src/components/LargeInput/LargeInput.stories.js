import { LargeInput } from ".";

export default {
  title: "Components/LargeInput",
  component: LargeInput,
  argTypes: {
    state: {
      options: ["caption", "active", "default", "success", "filled", "typing", "error", "disabled"],
      control: { type: "select" },
    },
    type: {
      options: ["search-icon", "standard"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "caption",
    type: "search-icon",
    className: {},
    overlapClassName: {},
    textClassName: {},
    ellipseClassName: {},
    line: "https://c.animaapp.com/hPRv8TiJ/img/line-1-6.svg",
  },
};
