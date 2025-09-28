import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import Input from "./Input";

const meta = {
  title: "Components/Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "datetime-local",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "classic"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    onChange: fn(),
    value: "",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    value: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This is disabled",
    disabled: true,
    value: "Disabled value",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
};

export const IconRight: Story = {
  args: {
    label: "Amount",
    placeholder: "0.00",
    type: "number",
    icon: <span className="text-sm font-medium">$</span>,
    iconPosition: "right",
  },
};

export const Classic: Story = {
  args: {
    label: "Classic Style",
    placeholder: "Classic input style",
    variant: "classic",
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="Text"
        type="text"
        placeholder="Text input"
        onChange={fn()}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Email input"
        onChange={fn()}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Password input"
        onChange={fn()}
      />
      <Input
        label="Number"
        type="number"
        placeholder="Number input"
        onChange={fn()}
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="Phone input"
        onChange={fn()}
      />
      <Input label="URL" type="url" placeholder="URL input" onChange={fn()} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input label="Normal" placeholder="Normal state" onChange={fn()} />
      <Input label="With Value" value="Some value" onChange={fn()} />
      <Input
        label="Disabled"
        disabled
        placeholder="Disabled state"
        onChange={fn()}
      />
      <Input
        label="With Error"
        placeholder="Error state"
        error="This field is required"
        onChange={fn()}
      />
    </div>
  ),
};
