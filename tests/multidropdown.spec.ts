
// Multidropdown



import { test, expect, Locator } from "@playwright/test"
import { text } from "node:stream/consumers"


test("Verify Multidropdown", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    // select dropdwown

   // await page.locator("#colors").selectOption(["Red", "Green"])// By visibilty


 //   await page.locator("#colors").selectOption(["blue", "white"]) // By value attribute

    // await page.locator("#colors").selectOption([{ value: "blue" }, { value: "white" }])  // By value attribute - both are same
    
    //  await page.locator("#colors").selectOption([{ label: "Yellow" }, { label: "Green" }])  // By lable
    

  //  await page.locator("#colors").selectOption([{ index: 2 }, { index: 4 }]) // By index 

    
    
    

    // To Count the all webelement of Dropdowns
    
    const Allcolors: Locator = page.locator("#colors>option")

    console.log(await Allcolors.count())
    
    expect(Allcolors).toHaveCount(7)





    // print all option or element of dropdown
    
    const alloptions: string[] = (await Allcolors.allTextContents()).map((text) => text.trim())
    

    expect(alloptions).toContain("Red")

    
    
    
    console.log(alloptions)


    // print without array

    for (const option of alloptions) {
    console.log(option)
}
    
    
    
  // await page.waitForTimeout(5000)
    


})