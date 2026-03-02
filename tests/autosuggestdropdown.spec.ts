import { test, expect, Locator } from "@playwright/test"
import { count } from "node:console"



test("Verify auto suggest dropdown", async ({ page }) => {
    
    await page.goto("https://www.flipkart.com/")

    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Mobile")

     await page.waitForTimeout(9000)
    

    const option: Locator = page.locator("ul>li")
      let count = await option.count()
    
    console.log("Count of options", await option.count())
    

    for (let i = 0; i < count; i++){
        
        console.log("inner ",await option.nth(i).innerText())

    
       

        
    }
    
    // click on Particular element

    for (let i = 0; i < count; i++){
        let text = await option.nth(i).innerText()
        
        if (text === 'mobile under 10000') {
            
           await option.nth(i).click()
            break;
        }
        
    }
    


})