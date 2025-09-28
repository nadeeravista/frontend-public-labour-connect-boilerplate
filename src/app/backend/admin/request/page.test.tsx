import { render, screen, fireEvent } from "@testing-library/react";
import ServiceRequestsPage from "./page";

// Mock the useServiceRequestsPage hook
const mockOnClickSubmit = jest.fn();
jest.mock("./useServiceRequestsPage", () => ({
  useServiceRequestsPage: () => ({
    options: {
      onClickSubmit: mockOnClickSubmit,
    },
    data: {
      pageTitle: "Service Requests",
      subTitle: "Manage service requests from users",
    },
  }),
}));

// Mock the components
jest.mock("@/components/CardHeader", () => {
  return function MockCardHeader({
    title,
    subtitle,
  }: {
    title: string;
    subtitle: string;
  }) {
    return (
      <div data-testid="card-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  };
});

jest.mock("@/components/Form/Input", () => {
  return function MockInput({ label, placeholder, onChange }: any) {
    return (
      <input
        data-testid="search-input"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
      />
    );
  };
});

jest.mock("@/components/Button", () => {
  return function MockButton({ label, onClick, variant }: any) {
    return (
      <button
        data-testid="submit-button"
        onClick={onClick}
        data-variant={variant}
      >
        {label}
      </button>
    );
  };
});

describe("ServiceRequestsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders page title and subtitle from hook", () => {
    render(<ServiceRequestsPage />);

    expect(screen.getByText("Service Requests")).toBeInTheDocument();
    expect(
      screen.getByText("Manage service requests from users"),
    ).toBeInTheDocument();
  });

  it("renders search input with correct props", () => {
    render(<ServiceRequestsPage />);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", "Enter text...");
  });

  it("renders submit button with correct props", () => {
    render(<ServiceRequestsPage />);

    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Primary Button");
    expect(submitButton).toHaveAttribute("data-variant", "primary");
  });

  it("calls onClickSubmit when button is clicked", () => {
    render(<ServiceRequestsPage />);

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    expect(mockOnClickSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders all main components", () => {
    render(<ServiceRequestsPage />);

    expect(screen.getByTestId("card-header")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("has correct layout structure", () => {
    render(<ServiceRequestsPage />);

    const container = screen.getByTestId("card-header").parentElement;
    expect(container).toHaveClass("space-y-8");
  });
});
