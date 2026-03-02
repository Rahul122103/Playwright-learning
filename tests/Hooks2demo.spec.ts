import { test, expect, Locator } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Open application
  await page.goto("https://www.demoblaze.com/index.html");

  // Login
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill("pavanol");
  await page.locator('#loginpassword').fill("test@123");

  await page.getByRole('button', { name: 'Log in' }).click();

  // Verify login
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});

test.afterEach(async ({ page }) => {
  // Logout
  await page.getByRole('link', { name: 'Log out' }).click();
});

test("count all products", async ({ page }) => {
  const product: Locator = page.locator("#tbodyid a.hrefch");
  const productCount = await product.count();

  expect(productCount).toBe(9);
});
