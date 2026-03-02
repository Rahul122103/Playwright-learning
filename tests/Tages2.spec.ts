import { test, expect } from "@playwright/test";

test(" check the URL",{ tag:'@sanity'}, async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
})


test(" Verify the store opens", { tag:'@regression'},  async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")

    await page.getByRole('link', { name: 'Store' }).click()
    

  await  expect(page.getByText('Ask more of your phone.', { exact: true })).toHaveText('Ask more of your phone.')
})