import { test, expect, Locator } from "@playwright/test";


test("verify auto waits", async ({ page }) => {

    test.slow()  // 90 sec.

    test.setTimeout(120_000) // set time for particular test

    // we can set time like this also 10000 , these 10K mili secod means 10 second 

    
    // This override test time , this will execute 
    // jo time configuration main set hai vo execute nhi hoga , agr  yhaan pr time set hai to 
    

    await page.goto("https://www.demoblaze.com/")

    const aboutus: Locator = page.getByRole('link', { name: 'About us' })


    await expect(aboutus).toBeVisible({timeout:10_000}) // apply time for particular assetion 
    

    await page.getByRole('link', { name: 'Log in' }).click({timeout:10_000})  // apply time for single action
    
    
    await page.locator("#loginusername").fill("Rahul",{timeout:10_000})
    

    await page.waitForTimeout(3000)
    
})