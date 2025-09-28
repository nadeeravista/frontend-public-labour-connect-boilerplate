import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders with children", () => {
    render(<Button>Test Children</Button>);
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" disabled onClick={handleClick} />);

    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loading state", () => {
    render(<Button label="Loading" loading />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toContainHTML("animate-spin");
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Button label="Primary" variant="primary" />);
    expect(screen.getByRole("button")).toHaveClass("from-blue-500");

    rerender(<Button label="Secondary" variant="secondary" />);
    expect(screen.getByRole("button")).toHaveClass("border-gray-300");

    rerender(<Button label="Success" variant="success" />);
    expect(screen.getByRole("button")).toHaveClass("from-green-500");

    rerender(<Button label="Danger" variant="danger" />);
    expect(screen.getByRole("button")).toHaveClass("from-red-500");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Button label="Small" size="sm" />);
    expect(screen.getByRole("button")).toHaveClass("px-4", "py-2", "text-sm");

    rerender(<Button label="Medium" size="md" />);
    expect(screen.getByRole("button")).toHaveClass("px-6", "py-3", "text-base");

    rerender(<Button label="Large" size="lg" />);
    expect(screen.getByRole("button")).toHaveClass("px-8", "py-4", "text-lg");
  });

  it("renders with icon", () => {
    const icon = <span data-testid="icon">🔥</span>;
    render(<Button label="With Icon" icon={icon} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button label="Custom" className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("renders as submit button", () => {
    render(<Button label="Submit" type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
