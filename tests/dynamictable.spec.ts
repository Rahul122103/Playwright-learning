import { test, expect, Locator } from "@playwright/test";

test("Verify dynamic Table", async ({ page }) => {
    
    await page.goto("https://practice.expandtesting.com/dynamic-table")

    // 1st locate the table body 
    
    const tbody: Locator = page.locator(".table tbody")
    
    await expect(tbody).toBeVisible()
    

    // 2nd locate the all rows and count rows 

    const rows: Locator[] = await tbody.locator("tr").all()
  
    
    
    expect(rows).toHaveLength(4)

    let cpuload:string =''

    for (let row of rows) {
     
        let processor: string = await row.locator("td").nth(0).innerText()
         
        //  console.log(processor)
        
        


        if (processor === 'Chrome') {
              cpuload = await row.locator("td", { hasText: "%" }).innerText()
          //  cpuload = await row.locator('td:has-text("%")').innerText()
           // console.log("Value of cpu ",cpuload)
            break;
        }
    }
    console.log("Value of cpu ",cpuload)
    
    let cpuvalue: string = await page.locator("#chrome-cpu").innerText()

    console.log(cpuvalue)
    if (cpuvalue.includes(cpuload)) {
        console.log("Cpu value is equal")
    }
    else {
        console.log("Cpu value is not equal")
    }
    
    expect(cpuvalue).toContain(cpuload)




    // 4th get the value of cpu for chrome


    



})