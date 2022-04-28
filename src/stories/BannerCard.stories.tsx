import { ComponentMeta, ComponentStory } from "@storybook/react";
import BannerCard from "./BannerCard";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "BannerCard",
  component: BannerCard,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof BannerCard>;

const Template: ComponentStory<typeof BannerCard> = (args) => (
  <BannerCard {...args} />
);

const TemplateWithChildren: ComponentStory<typeof BannerCard> = (args) => (
  <BannerCard {...args}>
    <form>
      <label>Email</label>
      <div>
        <input type={"email"} placeholder={"Your working email"} />
        <button type={"submit"}>Subscribe</button>
      </div>
      <p>
        *Sign Up to be the first to hear about exclusive deals, special offers
        and upcoming collections.
      </p>
    </form>
  </BannerCard>
);

export const SubscriptionForm = TemplateWithChildren.bind({});
SubscriptionForm.args = {
  subtitle: "For All new Email Subscribers",
  title: "Get 5% Off & Free Delivery",
  image:
    "https://firebasestorage.googleapis.com/v0/b/createx-f0a27.appspot.com/o/banners%2Fsubscription.png?alt=media&token=20567f7a-f6ce-406a-8233-16a3378b8652",
  link: "/",
};

export const SummerCollection = Template.bind({});
SummerCollection.args = {
  subtitle: "Summer Collections",
  title: "Sale Up to 70%",
  image:
    "https://firebasestorage.googleapis.com/v0/b/createx-f0a27.appspot.com/o/banners%2Fsummer_collection.png?alt=media&token=74bbb925-ce20-4c5f-b118-68e0611babf7",
  link: "/",
  buttonLabel: "Explore new prices",
};

export const DealOfTheWeek = Template.bind({});
DealOfTheWeek.args = {
  subtitle: "Deal of the Week",
  title: "Stay Warm With Our New Sweaters",
  image:
    "https://firebasestorage.googleapis.com/v0/b/createx-f0a27.appspot.com/o/banners%2Fdeal_of_the_week.png?alt=media&token=c21f0c9d-e92c-4a96-8091-ab11cb57464c",
  link: "/",
  buttonLabel: "Shop now",
  finishedAt: "2020-06-30T00:00:00.000Z",
};
