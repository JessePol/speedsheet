import { test, expect } from "@playwright/test";

test("hello world", async ({ page }) => {
  await page.goto("/basic_sheet/10x10_sheet");

  const body = page.getByRole("article");
  await expect(body).toHaveText(/Hello World/);
});
