import { test, expect, Locator } from "@playwright/test"



test("innertext() vs textContent()", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")
    

    const options: Locator = page.locator(".product-title")
    
    // Print single text value
/* 
    console.log(await options.nth(2).textContent()) // it give value with spaces , hidden text , line breaks.  
    console.log(await options.nth(2).innerText()) // It give pure text Which u see on UI
 */
    
  /*    const count =  await options.count()
    
    for (let i = 0; i <count; i++){
        
        // const textinner = await options.nth(i).innerText()
        // console.log(textinner)

        const textcontent = await options.nth(i).textContent()

        console.log(textcontent?.trim()) // we have to use trim() so that actually text value shoudl displays

    }  */
    
    
  /*   // we can applied different approch
    
    // allTextContents() and allInnerTexts()
    
    const alltext: string[] = (await options.allTextContents()).map(text => text.trim())
    // using map to so it can read all value and perform trim in all value and return in array form 

   const innertext:string[]   = await  options.allInnerTexts()
    
    console.log(alltext)
    console.log(innertext)


    for (let optionalltext of alltext) {
        
        console.log(optionalltext)
    }

     for (let optioninnertext of innertext) {
        
        console.log(optioninnertext)
    } */




    // all()
    /*
    What is all()? (one line)

👉 locator.all() returns an array of Locators — one for each matched element.

    */
    
    const productlocators: Locator[] = await options.all()
    
    console.log(productlocators)

    // print inertext of 1 web element

    console.log(await productlocators[1].innerText())


    // print all inner text

    
    for (let text of productlocators) {
        
        console.log(await text.innerText())
    }


})



