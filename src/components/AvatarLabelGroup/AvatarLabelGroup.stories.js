import { AvatarLabelGroup } from ".";

export default {
  title: "Components/AvatarLabelGroup",
  component: AvatarLabelGroup,
  argTypes: {
    size: {
      options: ["md", "sm", "lg", "xl"],
      control: { type: "select" },
    },
    statusIcon: {
      options: ["false", "company", "online-indicator"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "hover", "focus"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    statusIcon: "false",
    state: "default",
    className: {},
    textClassName: {},
    supportingTextClassName: {},
  },
};
