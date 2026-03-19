import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import Welcome from "./Welcome.svelte";

describe("Welcome.svelte", () => {
  it("renders greetings for host and guest", async () => {
    // <Welcome {host} {guest} />
    render(Welcome, { host: "SvelteKit" });

    await expect
      .element(page.getByRole("heading", { level: 1 }))
      .toHaveTextContent("Hello, SvelteKit!");
    await expect
      .element(page.getByRole("button"))
      .toHaveTextContent("Click me");
    await expect
      .element(page.getByTestId("block"))
      .toHaveStyle("background-color: green");
  });
});
