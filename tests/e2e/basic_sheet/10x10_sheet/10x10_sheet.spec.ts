import { test, expect } from "@playwright/test";
import exp from "constants";

test("hello world", async ({ page}) => {
  await page.goto("/10x10_sheet");

  const cells =  page.locator(".cell");

  await expect(cells).toHaveCount(100);

  await expect(cells.first()).toHaveText(/test/);
});
