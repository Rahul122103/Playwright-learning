import { test, expect } from "@playwright/test";


test("record video", async ({ page }) => {
    

  await page.goto("https://www.demoblaze.com/index.html")


  await page.waitForLoadState()



    await page.getByRole('link', { name: 'Log in' }).click()
    

   await page.locator('#loginusername').fill("pavanol")

    await page.locator('#loginpassword').fill("test@1235")
    

   await page.getByRole('button', { name: 'Log in' }).click()
    
    
  await  page.getByRole('link', { name: 'Log out' }).click()


})