import { test, expect } from "@playwright/test";




test("verify ss again", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")

   await page.waitForLoadState()
    
   expect(await page.screenshot()).toMatchSnapshot("newsnap.png")
    

})