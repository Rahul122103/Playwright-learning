import { test, expect, Locator } from "@playwright/test";


test("Verify the pagination Table", async ({ page }) => {
    
   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")


    // Locate the Table row and count

    
  //  let tablerows:Locator[] = await page.locator("#example tbody tr").all()
    
    

    
    let nextbutton: boolean = true;


    while (nextbutton) {

         let tablerows:Locator[] = await page.locator("#example tbody tr").all()
        
        for (let row of tablerows) {
        let rowsdata = await row.innerText()
            console.log(rowsdata)
            
        }

       await  page.waitForTimeout(2000)
        

        // nextbutton = false;
        
        let nextarrow: Locator = page.locator("button[aria-label='Next']");

     // await  page.waitForTimeout(5000)

        //  let text = await nextarrow.innerText()
        
      let text =  await nextarrow.getAttribute('class')
        
        if (text?.includes("disabled")) {
            nextbutton = false;
            
        }
        else {
           await nextarrow.click()
        }

    

       

    
        
        
        
    }
    
    
 
    

})


// Do same things with different type


test("Verify Again the pagination Table", async ({ page }) => {
    
   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    


    while (true) {

         let tablerows:Locator[] = await page.locator("#example tbody tr").all()
        
        for (let row of tablerows) {
        let rowsdata = await row.innerText()
            console.log(rowsdata)
            
        }

      await  page.waitForTimeout(1000)
        

        
        
        let nextarrow: Locator = page.locator("button[aria-label='Next']");

    
        
     // let text =  await nextarrow.getAttribute('class')
        
        if (await nextarrow.isDisabled()) {
            break;
            
        }
        else {
           await nextarrow.click()
        }

    

       

    
        
        
        
    }
    
    
 
    

})



test("Verify page dropdown", async ({ page }) => {
    
  
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    

    const dropdown = page.locator("#dt-length-0")

  await  expect(dropdown).toBeVisible()


    await dropdown.selectOption({ value: "25" })

    await   page.waitForTimeout(1000)
    

    
    let tablerows: Locator[] = await page.locator("#example tbody tr").all()

 

    expect(tablerows.length).toBe(25)

    expect(tablerows).toHaveLength(25)



    
        
        for (let row of tablerows) {
        let rowsdata = await row.innerText()
            console.log(rowsdata)
            
        }
    
 
    

})






test.only("Verify search", async ({ page }) => {
    
  
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    

    const searchbox = page.locator("#dt-search-0")
    
    await expect(searchbox).toBeVisible()
    

    let searchtext = await searchbox.fill("Ashton Cox")
   let inputtext:string  = await searchbox.inputValue()

await page.waitForTimeout(1000)


    let tablerows: Locator[] = await page.locator("#example tbody tr").all()

    // expect(tablerows.length).toBeGreaterThan(0)  it can not be used here , when data is not present there 
    // is a blank row , so in that case length is present , so it can not be used here 

    if (tablerows.length >= 1) {


        for (let row of tablerows) {
            let text = await row.innerText()

           // console.log(text)
            
            if (text.includes(inputtext)) {

                console.log("Data is found")


               
                
                
            }
            else {
                console.log("data is not found")
            }
        }

        }

        
    }





    



)




