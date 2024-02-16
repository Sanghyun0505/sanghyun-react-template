import { Meta, StoryObj } from "@storybook/react";
import { GaugeBar } from "./GaugeBar";

const meta: Meta<typeof GaugeBar> = {
  title: "Ui/GaugeBar",
  component: GaugeBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GaugeBar>;

export const StyledGaugeBar: Story = {
  args: {
    gauge: 50,
    customStyle: {
      wrapStyle: {
        width: "500px",
      },
    },
  },
};
