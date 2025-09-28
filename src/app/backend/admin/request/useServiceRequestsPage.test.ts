import { useServiceRequestsPage } from "./useServiceRequestsPage";

// Mock console.log to avoid actual logging during tests
const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

describe("useServiceRequestsPage", () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  it("returns correct data structure", () => {
    const result = useServiceRequestsPage();

    expect(result).toHaveProperty("data");
    expect(result).toHaveProperty("options");
  });

  it("returns correct page data", () => {
    const result = useServiceRequestsPage();

    expect(result.data).toEqual({
      pageTitle: "Service Requests",
      subTitle: "Here's what's happening with your projects today",
    });
  });

  it("returns onClickSubmit function", () => {
    const result = useServiceRequestsPage();

    expect(typeof result.options.onClickSubmit).toBe("function");
  });

  it("onClickSubmit logs to console when called", () => {
    const result = useServiceRequestsPage();

    result.options.onClickSubmit();

    expect(mockConsoleLog).toHaveBeenCalledWith("onClickSubmit");
    expect(mockConsoleLog).toHaveBeenCalledTimes(1);
  });

  it("returns consistent data structure on multiple calls", () => {
    const result1 = useServiceRequestsPage();
    const result2 = useServiceRequestsPage();

    expect(result1.data).toEqual(result2.data);
    expect(typeof result1.options.onClickSubmit).toBe(
      typeof result2.options.onClickSubmit,
    );
  });
});
