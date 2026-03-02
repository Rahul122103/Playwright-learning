import { test, expect, Locator } from "@playwright/test"



// Text input box 

test.only("Verify text input ", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")


    const namebox: Locator = page.getByRole('textbox', { name: 'Enter Name' })
    
   await  expect(namebox).toBeVisible()

    await expect(namebox).toBeEnabled() 
    
    const attributevale: string | null = await namebox.getAttribute("maxlength")
    expect(attributevale).toBe('15')   // it compare the Value

    

    await namebox.fill("Rahul")
    
    const enteredvalue = await namebox.inputValue()
    
    console.log(enteredvalue)

    expect(enteredvalue).toBe("Rahul")





    // email
    
    const email: Locator = page.getByRole('textbox', { name: 'Enter EMail' })
    
   await email.fill("rahulraj@gmail.com")



    await page.waitForTimeout(2000)






    

})


// Test checkbox Button

    
    test("Verify Radio Button", async ({ page }) => {
        
        await page.goto("https://testautomationpractice.blogspot.com/")
        
        const maleradiobutton: Locator = page.getByRole('radio', { name: 'Male', exact: true })
        
       // await expect(maleradiobutton).toBeChecked()
      //  console.log(await expect(maleradiobutton).toBeChecked())
        
        await expect(maleradiobutton).toBeVisible()

        await expect(maleradiobutton).toBeEnabled()

       expect(await maleradiobutton.isChecked()).toBe(false)
        

       await maleradiobutton.check()

        // await expect(maleradiobutton).toBeChecked() // mostly used 
        
        expect(await maleradiobutton.isChecked()).toBe(true)
        




    


        

    })


     
    test("Verify checkboxes", async ({ page }) => {
        
        await page.goto("https://testautomationpractice.blogspot.com/")
        
        const sundaycheckbox: Locator = page.getByLabel("Sunday")

        await sundaycheckbox.check()
        
        await expect(sundaycheckbox).toBeChecked()
        


        const days:string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
        ];


         for (let day of days) {
             const daylocator: Locator =  page.getByLabel(day)
             await daylocator.check()
             expect(daylocator).toBeChecked()
             
             
        }
        


        await page.waitForTimeout(2000)


          for (let day of days.slice(-2)) {
              const checkbox = page.getByLabel(day);
             await checkbox.uncheck()
             await expect(checkbox).not.toBeChecked()
        }
        

      await page.waitForTimeout(2000)



        // Uncheck which is checked 
        // Checked which is uncheked



        for (let day of days) {
            
            const checkbox = page.getByLabel(day)
            if (await checkbox.isChecked()) {
                
                 await checkbox.uncheck()
             await expect(checkbox).not.toBeChecked()

            }
            else {
                await checkbox.check()
             expect(checkbox).toBeChecked()
            }
    
        } 

   




        
        
        
        // using foreach for 

      
        



        
        await page.waitForTimeout(2000)







      
        




    


        

    })

    


    




    
