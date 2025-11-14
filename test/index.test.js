const { capitalizeWords, filterActiveUsers, logAction } = require('../index')


describe("capitalizeWords", () => {
  test("capitalizes each word in a normal string", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("returns empty string if input is empty", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("capitalizes a single word", () => {
    expect(capitalizeWords("test")).toBe("Test");
  });

  test("handles special characters gracefully", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });
});

describe("filterActiveUsers", () => {
  test("returns only active users", () => {
    const data = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];
    expect(filterActiveUsers(data)).toEqual([
      { name: "Alice", isActive: true },
    ]);
  });

  test("returns empty array when no users are active", () => {
    const data = [
      { name: "A", isActive: false },
      { name: "B", isActive: false },
    ];
    expect(filterActiveUsers(data)).toEqual([]);
  });

  test("returns empty array when input is empty", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe("logAction", () => {
  test("creates a valid log message format", () => {
    const result = logAction("login", "Alice");
    expect(result).toContain("User Alice performed login at");
  });

  test("handles empty action", () => {
    const result = logAction("", "Alice");
    expect(result).toContain("User Alice performed  at");
  });

  test("handles empty username", () => {
    const result = logAction("login", "");
    expect(result).toContain("User  performed login at");
  });
});


