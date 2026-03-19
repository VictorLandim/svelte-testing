import { page } from "vitest/browser"
import { describe, expect, it } from "vitest"
import { render } from "vitest-browser-svelte"
import Counter from "./Counter.svelte"

describe("Counter.svelte", () => {
    it("counter starts with zero", async () => {
        render(Counter)

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toBeInTheDocument()

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toHaveTextContent("0")
    })

    it("counter increments by 1 when clicked", async () => {
        const { container } = await render(Counter)

        const buttons = [...container.querySelectorAll("button")]
        const incrementButton = buttons?.find((button) =>
            button.classList.contains("increment-button")
        )

        incrementButton?.click()

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toHaveTextContent("1")
    })
    it("counter decrements by 1 when clicked", async () => {
        const { container } = await render(Counter)

        const buttons = [...container.querySelectorAll("button")]
        const incrementButton = buttons?.find((button) =>
            button.classList.contains("decrement-button")
        )

        incrementButton?.click()

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toHaveTextContent("-1")
    })

    it("counter clears when clicked", async () => {
        const { container } = await render(Counter)

        const buttons = [...container.querySelectorAll("button")]
        const incrementButton = buttons?.find((button) =>
            button.classList.contains("increment-button")
        )

        incrementButton?.click()

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toHaveTextContent("1")

        const clearButton = buttons?.find((button) =>
            button.classList.contains("clear-button")
        )

        clearButton?.click()

        await expect
            .element(page.getByRole("heading", { level: 1 }))
            .toHaveTextContent("0")
    })
})
