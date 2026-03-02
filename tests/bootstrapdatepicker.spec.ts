import { test, expect, Locator } from "@playwright/test";


test("Verify the bootstape datepicker", async ({ page }) => {
    

    await page.goto("https://www.booking.com/")



    


    const calender: Locator = page.locator(".ed9f289288")
    
    await expect(calender).toBeVisible()

    await calender.click()


    // Checkin details 


    const checkinyear: string = "2026"
    
    const checkinmonths: string = "January"
    
    const checkindate:string ="26"
    
    
    
    while (true) {
        
        const monthsyear: string = await page.locator("h3[aria-live='polite']").nth(0).innerText()
        
        const months: string = monthsyear.split(" ")[0]
        const years: string = monthsyear.split(" ")[1]
        
        if (months === checkinmonths && years === checkinyear) {
            break;
        }

        else {
          await  page.locator("button[aria-label='Next month']").click()
        }


    }


    const alldate = await page.locator(".b8fcb0c66a").nth(0).locator("td").all()

    for (let dt of alldate) {
        const dttext: string = await dt.innerText()
        
        if (dttext === checkindate && await dt.isEnabled()) {
            await dt.click()
            
            break;
        }

        
          
        
    }


    // Checkout details

    
    const checkoutyear: string = "2026"
    
    const checkoutmonths: string = "January"
    
    const checkoutdate:string ="27"
    
    
    
    while (true) {
        
        const monthsyear: string = await page.locator("h3[aria-live='polite']").nth(1).innerText()
        
        const months: string = monthsyear.split(" ")[0]
        const years: string = monthsyear.split(" ")[1]
        
        if (months === checkoutmonths && years === checkoutyear) {
            break;
        }

        else {
          await  page.locator("button[aria-label='Next month']").click()
        }


    }


    const alldt = await page.locator(".b8fcb0c66a").nth(1).locator("td").all()

    for (let dt of alldt) {
        const dttext: string = await dt.innerText()
        
        if (dttext === checkoutdate && await dt.isEnabled()) {
            await dt.click()
            
            break;
        }
        
         
        
    }

    await page.waitForTimeout(5000)
    
})