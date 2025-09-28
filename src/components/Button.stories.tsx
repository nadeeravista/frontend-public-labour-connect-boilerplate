import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "outline",
        "ghost",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
  args: {
    onClick: fn(),
    label: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "Loading Button",
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
};

export const IconRight: Story = {
  args: {
    label: "Icon Right",
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    ),
    iconPosition: "right",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" label="Primary" />
        <Button variant="secondary" label="Secondary" />
        <Button variant="success" label="Success" />
        <Button variant="danger" label="Danger" />
        <Button variant="outline" label="Outline" />
        <Button variant="ghost" label="Ghost" />
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="sm" label="Small" />
        <Button size="md" label="Medium" />
        <Button size="lg" label="Large" />
      </div>
      <div className="flex flex-wrap gap-4">
        <Button disabled label="Disabled" />
        <Button loading label="Loading" />
      </div>
    </div>
  ),
};
