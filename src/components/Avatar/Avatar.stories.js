import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["xl", "xs", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    statusIcon: {
      options: ["company", "false", "online-indicator"],
      control: { type: "select" },
    },
    state: {
      options: ["focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "xl",
    placeholder: true,
    text: true,
    statusIcon: "company",
    state: "focused",
    className: {},
  },
};
