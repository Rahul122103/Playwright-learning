



import { test, expect, Locator } from "@playwright/test"




test("Verify static dropdown", async ({ page }) => {
    

    await page.goto("https://testautomationpractice.blogspot.com/")
    


    // Four ways to select dropdown
    
    
    // using css 
    
    await page.waitForTimeout(2000)
    
    const csslocator: Locator = page.locator("#country")

     // 1. Visible text
    /* first locate the dropdown , then use selectoption() and pass value inside selectoption()
    which dropdown should be select
    */

          /*  csslocator.selectOption("Canada")

            await page.waitForTimeout(2000) */
    

    // using getByRole()
    
    const dropdown: Locator = page.getByRole('combobox', { name: 'Country:' })
    
  /*   await dropdown.selectOption("Japan")

     await page.waitForTimeout(2000) */
    
    
    
    
    
    
    
    // 2 . By using Value attributes

    /* // use css locator

   await csslocator.selectOption({ value: 'brazil' })

    await page.waitForTimeout(2000) 


    // use getbyrole

  await  dropdown.selectOption({ value: 'india' })
    await page.waitForTimeout(2000)  */
    




    //3. by lable - lable means text here 

   /*  // css
    

    await csslocator.selectOption({ label: 'Canada' })

    await page.waitForTimeout(2000)

    
// by getByROle()

    await  dropdown.selectOption({ label: 'India' })
    await page.waitForTimeout(2000)
 */

    
    
    
    // 4. By index
    

/* 
     await csslocator.selectOption({ index:1 })

    await page.waitForTimeout(2000)

await  dropdown.selectOption({ index: 5 })
    await page.waitForTimeout(2000) */






    // To Count the all element of Dropdowns


    const allelement: Locator = page.locator("#country>option")

    const totalelement: number = await allelement.count();
    
    console.log(totalelement)

    await expect(allelement).toHaveCount(10)
    


    // Check option present in dropdown 

    const dropdownlist: string[] = await allelement.allTextContents()

  const textelement:string[]   = dropdownlist.map((text) => {

       return text.trim()
    })
    
    console.log(textelement)

    expect(textelement).toContain("Japan")

    await page.waitForTimeout(3000)




    // print all option or element of dropdown



    for (const option of textelement) {
       console.log(option)
   }
    


    
})