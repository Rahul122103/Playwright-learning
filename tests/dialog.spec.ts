import { test, expect, Locator } from "@playwright/test";



test("Verify alert dialog", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on('dialog', (dialog) => {

        console.log(dialog.type())

        expect(dialog.type()).toContain("alert")
        
        console.log("ALert message", dialog.message())

        expect(dialog.message()).toContain("I am an alert box!")
        
        dialog.accept()
    })


  await  page.getByRole('button', { name: 'Simple Alert' }).click()

//  await  page.waitForTimeout(5000)
    
})


test("Verify confirm dialog", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")

 
    page.on('dialog', (dialog) => {

        console.log(dialog.type())

        expect(dialog.type()).toContain("confirm")
        
        console.log("ALert message", dialog.message())

        expect(dialog.message()).toContain("Press a button!")
        
          dialog.accept()
       // dialog.dismiss()
    }) 


    await page.getByRole('button', { name: 'Confirmation Alert' }).click()

    const  messagelocator:Locator   =  page.locator("#demo")
    
    const confirmtext: string = await messagelocator.innerText()
   await expect(messagelocator).toHaveText(confirmtext)

 // await  page.waitForTimeout(5000)
    
})


test.only("Verify prompt dialog", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")

 
    page.on('dialog', (dialog) => {

        console.log(dialog.type())

        expect(dialog.type()).toContain("prompt")
        
        console.log("ALert message", dialog.message())

        expect(dialog.message()).toContain("Please enter your name:")

      console.log("Default value : " ,dialog.defaultValue())
        
          dialog.accept("Rahul")
       // dialog.dismiss()
    }) 


    await page.getByRole('button', { name: 'Prompt Alert' }).click()

    const  messagelocator:Locator   =  page.locator("#demo")
    
    const confirmtext: string = await messagelocator.innerText()
    
   await expect(messagelocator).toHaveText(confirmtext)

  await  page.waitForTimeout(5000)
    
})