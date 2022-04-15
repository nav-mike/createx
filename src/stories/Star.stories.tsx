import React from "react";
import Star from "./Star";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Star",
  component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
};

export const Unfilled = Template.bind({});
Unfilled.args = {
  filled: false,
};
