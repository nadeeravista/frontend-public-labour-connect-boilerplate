import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import WarningCard from "./WarningCard";

const meta = {
  title: "Components/WarningCard",
  component: WarningCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["warning", "error", "info", "success"],
    },
    title: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
  },
  args: {
    message: "This is a warning message",
  },
} satisfies Meta<typeof WarningCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    title: "Warning",
    message: "This is a warning message that requires your attention.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    message: "Something went wrong. Please try again.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    message: "Here is some helpful information for you.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    message: "Operation completed successfully!",
  },
};

export const WithAction: Story = {
  args: {
    title: "Action Required",
    message: "Please confirm this action to continue.",
    action: {
      label: "Confirm",
      onClick: fn(),
    },
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: "Custom Icon",
    message: "This card has a custom icon.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
};

export const LongMessage: Story = {
  args: {
    title: "Long Message",
    message:
      "This is a very long warning message that demonstrates how the component handles longer text content. It should wrap properly and maintain good readability while staying within the card boundaries.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <WarningCard
        variant="warning"
        title="Warning"
        message="This is a warning message"
      />
      <WarningCard
        variant="error"
        title="Error"
        message="This is an error message"
      />
      <WarningCard
        variant="info"
        title="Info"
        message="This is an info message"
      />
      <WarningCard
        variant="success"
        title="Success"
        message="This is a success message"
      />
    </div>
  ),
};
