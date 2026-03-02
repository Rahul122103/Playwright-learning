import { test, expect, Locator, Page } from "@playwright/test";

async function datepicker(mmonths: string, yyear: string, ddate: string, page:Page) {
    
    
    while (true) {
    
        const monthstext: string = await page.locator(".ui-datepicker-month").innerText()

        const yeartext: string =  await page.locator(".ui-datepicker-year").innerText()


        if (monthstext === mmonths && yeartext === yyear) {
            
            break;
        }

        else {
          //  await page.locator(".ui-datepicker-next").click() // future 
            
          await  page.locator(".ui-datepicker-prev").click()   // Past
        }

    }

   
    const alldate: Locator[] = await page.locator(".ui-datepicker-calendar td").all()
    
    for (let dt of alldate) {
        const dttext = await dt.innerText()

        if (dttext === ddate) {
            await dt.click()
            
            break;
        }
    }


}


test("Verify datepicker", async ({ page }) => {
    

    await page.goto("https://testautomationpractice.blogspot.com/")
    


    // using fill method

    const filldate: Locator = page.locator("#datepicker")
    

  await  filldate.click()
    
/* await expect(filldate).toBeVisible()
    
   await filldate.fill("05/14/2001") */
    
    
    
    // 

    // Take target input 
    
     const targetmonth: string = "January"
    const targetdate: string = "2"
    const targetyear: string = "2020" 

    
   // await datepicker("January", "2020", "2", page)
    await datepicker(targetmonth,targetyear,targetdate,page)

    const expecteddate = "01/02/2020"
    
  await  expect(filldate).toHaveValue(expecteddate)

    await page.waitForTimeout(2000)


    

})