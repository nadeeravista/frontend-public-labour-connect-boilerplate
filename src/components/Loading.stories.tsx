import type { Meta, StoryObj } from "@storybook/nextjs";
import { Loading } from "./Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["fullscreen", "spinner", "inline"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    message: {
      control: { type: "text" },
    },
    color: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    variant: "inline",
    message: "Loading...",
  },
};

export const InlineSmall: Story = {
  args: {
    variant: "inline",
    size: "sm",
    message: "Small loading",
  },
};

export const InlineLarge: Story = {
  args: {
    variant: "inline",
    size: "lg",
    message: "Large loading",
  },
};

export const Spinner: Story = {
  args: {
    variant: "spinner",
  },
};

export const SpinnerWithMessage: Story = {
  args: {
    variant: "spinner",
    message: "Processing your request...",
  },
};

export const Fullscreen: Story = {
  args: {
    variant: "fullscreen",
    message: "Loading application...",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const CustomColor: Story = {
  args: {
    variant: "inline",
    message: "Custom color",
    color: "border-blue-500",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Loading variant="inline" size="sm" message="Small" />
      </div>
      <div className="flex items-center gap-4">
        <Loading variant="inline" size="md" message="Medium" />
      </div>
      <div className="flex items-center gap-4">
        <Loading variant="inline" size="lg" message="Large" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Inline Variant</h3>
        <Loading variant="inline" message="Inline loading with message" />
      </div>
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Spinner Variant</h3>
        <Loading variant="spinner" message="Spinner loading" />
      </div>
    </div>
  ),
};
