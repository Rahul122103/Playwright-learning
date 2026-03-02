import { test, expect, Locator } from "@playwright/test";


test("upload files", async ({ page }) => {
    
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    

    const chooseOneFile: Locator = page.locator('#singleFileInput')
    
    
    await chooseOneFile.setInputFiles('uploads/Day6-Loops.pdf')
     // C:\Automation\Playwrightdemo\uploads\Day6-Loops.pdf
    

    await page.getByRole('button', { name: 'Upload Single File' }).click()


    const statusmessage = await page.locator("#singleFileStatus").textContent()
    expect(statusmessage).toContain("Day6-Loops.pdf")




    const choosemultiFile: Locator = page.locator('#multipleFilesInput')
    
    
    await choosemultiFile.setInputFiles(['uploads/Day6-Loops.pdf','uploads/Day7-Functions.pdf'])
     //

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click()


    const statusmessage1 = await page.locator("#multipleFilesStatus").textContent()
    
    expect(statusmessage1).toContain("Day6-Loops.pdf")
    expect(statusmessage1).toContain("Day7-Functions.pdf")



    

    await page.waitForTimeout(3000)

    



})