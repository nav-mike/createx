import ButtonLink from "./ButtonLink";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImArrowRight2 } from "react-icons/all";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "ButtonLink",
  component: ButtonLink,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Link = Template.bind({});
Link.args = {
  title: "Explore new prices",
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  title: "See offers",
  icon: ImArrowRight2,
};
