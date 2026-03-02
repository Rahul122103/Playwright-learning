import { test, expect } from "@playwright/test";

test("@sanity check the URL", async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
})


test("@regression @sanity , Verify the store opens", async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")

    await page.getByRole('link', { name: 'Store' }).click()
    

  await  expect(page.getByText('Ask more of your phone.', { exact: true })).toHaveText('Ask more of your phone.')
})