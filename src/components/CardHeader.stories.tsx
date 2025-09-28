import type { Meta, StoryObj } from "@storybook/nextjs";
import CardHeader from "./CardHeader";

const meta = {
  title: "Components/CardHeader",
  component: CardHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    subtitle: {
      control: { type: "text" },
    },
    gradientFrom: {
      control: { type: "text" },
    },
    gradientTo: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "text" },
    },
    subtitleColor: {
      control: { type: "text" },
    },
  },
  args: {
    title: "Card Header",
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome Back",
    subtitle: "Here's what's happening with your projects today",
  },
};

export const WithStats: Story = {
  args: {
    title: "Dashboard Overview",
    subtitle: "Your current metrics and performance",
    stats: [
      { label: "Projects", value: 12 },
      { label: "Tasks", value: 48 },
      { label: "Completed", value: 32 },
    ],
  },
};

export const CustomGradient: Story = {
  args: {
    title: "Custom Gradient",
    subtitle: "Using custom gradient colors",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
  },
};

export const RedGradient: Story = {
  args: {
    title: "Red Theme",
    subtitle: "Using red gradient",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-600",
  },
};

export const PurpleGradient: Story = {
  args: {
    title: "Purple Theme",
    subtitle: "Using purple gradient",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-600",
  },
};

export const OrangeGradient: Story = {
  args: {
    title: "Orange Theme",
    subtitle: "Using orange gradient",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600",
  },
};

export const DarkText: Story = {
  args: {
    title: "Dark Text",
    subtitle: "Using dark text on light gradient",
    gradientFrom: "from-gray-100",
    gradientTo: "to-gray-200",
    textColor: "text-gray-800",
    subtitleColor: "text-gray-600",
  },
};

export const MultipleStats: Story = {
  args: {
    title: "Analytics Dashboard",
    subtitle: "Comprehensive overview of your business metrics",
    stats: [
      { label: "Total Users", value: "1,234" },
      { label: "Revenue", value: "$45,678" },
      { label: "Growth", value: "+12.5%" },
      { label: "Conversion", value: "3.2%" },
    ],
  },
};

export const AllGradients: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <CardHeader title="Blue Gradient" subtitle="Default blue to purple" />
      <CardHeader
        title="Green Gradient"
        subtitle="Green to teal"
        gradientFrom="from-green-500"
        gradientTo="to-teal-600"
      />
      <CardHeader
        title="Red Gradient"
        subtitle="Red to pink"
        gradientFrom="from-red-500"
        gradientTo="to-pink-600"
      />
      <CardHeader
        title="Purple Gradient"
        subtitle="Purple to indigo"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-600"
      />
    </div>
  ),
};
