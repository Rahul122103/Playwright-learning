import { test, expect } from "@playwright/test";


 const searchitem:string[] =['laptop','Jeans','Computer','blank']

for (let item of searchitem) {

    test.describe("verify search with different items", () => {


 
    


        test(`Verify search functionality for  ${item}  `, async ({ page }) => {
    

            await page.goto("https://demowebshop.tricentis.com/")
    

            page.locator('#small-searchterms').fill(item)
    
            await page.locator("input[value='Search']").click()
    
            // const text = await page.locator("h2 a").first().innerText()
    
            await expect(page.locator("h2 a").first()).toContainText(item, { ignoreCase: true })
    

        })


           })

    }

    

