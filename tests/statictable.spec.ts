import { test,expect, Locator } from "@playwright/test"


test("Verify static web Table", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")


    // Locate the Table


    const staticTable: Locator = page.locator("table[name='BookTable']>tbody")
    

    await expect(staticTable).toBeVisible()
    


    // Now Locate the Rows
    
    let rows: Locator = staticTable.locator("tr")

    // Counting rows

    let rowcount: number = await rows.count()
    
    console.log(rowcount)

    await expect(rows).toHaveCount(7)
    
    expect(rowcount).toBe(7)



    // Counting columns

    let columns: Locator = rows.locator("th")

   await expect(columns).toHaveCount(4)

   let  coulmscount:number  = await columns.count()
    console.log(coulmscount)

    expect(coulmscount).toBe(4)


    // Reading Data from a Specific Row:

    console.log(await rows.nth(2).innerText())
    


    // Print all row data excluding header


    let tabledata: Locator = rows.locator("td")
    console.log(await tabledata.count())

    const rowtddata: string[] = await tabledata.allInnerTexts()
    
    console.log(rowtddata)


    let tddata: Locator[] = await tabledata.all()
    

    for (let text of tddata) {
        console.log((await text.innerText()))
    }
    
    


    
    



    

})