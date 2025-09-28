import { render, screen } from "@testing-library/react";
import CardHeader from "./CardHeader";

describe("CardHeader", () => {
  it("renders title", () => {
    render(<CardHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<CardHeader title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<CardHeader title="Test Title" />);
    expect(screen.queryByText("Test Subtitle")).not.toBeInTheDocument();
  });

  it("renders stats when provided", () => {
    const stats = [
      { label: "Projects", value: 12 },
      { label: "Tasks", value: 48 },
    ];

    render(<CardHeader title="Dashboard" stats={stats} />);

    expect(screen.getByText("Projects: 12")).toBeInTheDocument();
    expect(screen.getByText("Tasks: 48")).toBeInTheDocument();
  });

  it("does not render stats section when not provided", () => {
    render(<CardHeader title="Simple Header" />);
    expect(screen.queryByText(/Projects:/)).not.toBeInTheDocument();
  });

  it("applies default gradient classes", () => {
    render(<CardHeader title="Default Gradient" />);
    const header = screen.getByText("Default Gradient").closest("div");
    expect(header).toHaveClass("from-blue-500", "to-purple-600");
  });

  it("applies custom gradient classes", () => {
    render(
      <CardHeader
        title="Custom Gradient"
        gradientFrom="from-green-500"
        gradientTo="to-teal-600"
      />,
    );
    const header = screen.getByText("Custom Gradient").closest("div");
    expect(header).toHaveClass("from-green-500", "to-teal-600");
  });

  it("applies custom text colors", () => {
    render(
      <CardHeader
        title="Custom Colors"
        textColor="text-red-800"
        subtitleColor="text-red-600"
      />,
    );

    expect(screen.getByText("Custom Colors")).toHaveClass("text-red-800");
  });

  it("renders multiple stats correctly", () => {
    const stats = [
      { label: "Total Users", value: "1,234" },
      { label: "Revenue", value: "$45,678" },
      { label: "Growth", value: "+12.5%" },
    ];

    render(<CardHeader title="Analytics" stats={stats} />);

    expect(screen.getByText("Total Users: 1,234")).toBeInTheDocument();
    expect(screen.getByText("Revenue: $45,678")).toBeInTheDocument();
    expect(screen.getByText("Growth: +12.5%")).toBeInTheDocument();
  });

  it("applies correct structure with title and subtitle", () => {
    render(<CardHeader title="Main Title" subtitle="Subtitle Text" />);

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("Main Title");
    expect(title).toHaveClass("text-lg", "font-semibold");

    expect(screen.getByText("Subtitle Text")).toHaveClass("text-sm");
  });
});
