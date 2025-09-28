import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders input field", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders with label", () => {
    const handleChange = jest.fn();
    render(<Input label="Email" onChange={handleChange} />);

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Enter email" onChange={handleChange} />);

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays error message", () => {
    const handleChange = jest.fn();
    render(<Input error="This field is required" onChange={handleChange} />);

    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("border-red-500");
  });

  it("renders as disabled", () => {
    const handleChange = jest.fn();
    render(<Input disabled onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:opacity-50");
  });

  it("renders with different input types", () => {
    const handleChange = jest.fn();

    const { rerender } = render(<Input type="email" onChange={handleChange} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(<Input type="password" onChange={handleChange} />);
    expect(screen.getByDisplayValue("")).toHaveAttribute("type", "password");

    rerender(<Input type="number" onChange={handleChange} />);
    expect(screen.getByRole("spinbutton")).toHaveAttribute("type", "number");
  });

  it("renders with icon", () => {
    const handleChange = jest.fn();
    const icon = <span data-testid="icon">🔍</span>;

    render(<Input icon={icon} onChange={handleChange} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const handleChange = jest.fn();
    render(<Input className="custom-class" onChange={handleChange} />);

    const container = screen.getByRole("textbox").parentElement?.parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("renders with name attribute", () => {
    const handleChange = jest.fn();
    render(<Input name="email" onChange={handleChange} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("name", "email");
  });

  it("displays value correctly", () => {
    const handleChange = jest.fn();
    render(<Input value="test value" onChange={handleChange} />);

    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
  });
});
