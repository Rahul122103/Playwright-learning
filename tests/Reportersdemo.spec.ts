import { test, expect } from "@playwright/test";

test(" check the URL", async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
})


test(" Verify the store opens", async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")

    await page.getByRole('link', { name: 'Store' }).first().click()
    

  await  expect(page.locator('div.Tfrtmd')).toBeVisible({timeout:2000})
})