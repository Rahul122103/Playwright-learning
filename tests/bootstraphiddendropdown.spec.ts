import { test, expect, Locator } from "@playwright/test"



test("Verify hidden dropdown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole('button', { name: 'Login' }).click()
    
    
    // click on PIM
    
    let pim = page.getByText('PIM').first()
    

   await pim.click()
    

    let dropdown = page.locator("i[class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").nth(2)
    
   await dropdown.click()
    

    await page.waitForTimeout(5000)


    const options: Locator = page.locator("form span")
    const count = await options.count()
    
    console.log("Total webelemet", count)
    

    const alltext: string[] = await options.allTextContents()
    
    for (const text of alltext) {
        console.log(text)

        
    }

     

        
    for (let i = 0; i < count; i++){
        let text = await options.nth(i).innerText()
        
        if (text === 'Software Engineer') {
            await options.nth(i).click()
            break;
         }
     
    } 
        

await page.waitForTimeout(1000)



})