import { describe, it, expect } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("returns a greeting", () => {
    const result = greet("Svelte");
    const expectation = "Hello, Svelte!";

    expect(result).toBe(expectation);
    expect(result).not.toBe("Hello, Svelte.");
  });
});
