import { test, expect } from "@playwright/test";

/*
Methods
down = means down the kewyboard ( when u click on button here button go down)
insertText = type something
press = press is combination down+up , in press both down and up actions perform together
type = type something 
up = after down then button comes up after u removes hands on button 


*/


test("verify keyboard action - long  way", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const input = page.locator('#input1')

    //1 focus on the input

    await input.focus()
    
    // here we can also use click() method


    


    //2 tye something 

   await page.keyboard.insertText("Hello Rahul")

    
    
    
    //3 control+A

    await page.keyboard.down("Control")
    
    await page.keyboard.press("A")

     await page.keyboard.up("Control")



    
    
    
    
    //4 control+c
    await page.keyboard.down("Control")
    
    await page.keyboard.press("C")

     await page.keyboard.up("Control")

    
    
    //5 press tab 2 times
    await page.keyboard.press("Tab")
     await page.keyboard.press("Tab")

    
    
    //6 ctrl+v
    
     await page.keyboard.down("Control")
    
    await page.keyboard.press("V")

     await page.keyboard.up("Control")

    
    
   //7 press tab 2 times
    await page.keyboard.press("Tab")
     await page.keyboard.press("Tab")

    
    //8 ctrl+v
    
     await page.keyboard.down("Control")
    
    await page.keyboard.press("V")

     await page.keyboard.up("Control")
    

    await page.waitForTimeout(3000)

})



test.only("verify keyboard action - simple way", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const input = page.locator('#input1')

    //1 focus on the input

    await input.focus()
    
    // here we can also use click() method


    


    //2 tye something 

   await page.keyboard.insertText("Hello Rahul")

    
    
    
    //3 control+A

    await page.keyboard.press("Control+A")
    
    



    
    
    
    
    //4 control+c
    await page.keyboard.press("Control+C")
    
    
    
    //5 press tab 2 times
    await page.keyboard.press("Tab")
     await page.keyboard.press("Tab")

    
    
    //6 ctrl+v
    
    await page.keyboard.press("Control+V")
    
    
    
   //7 press tab 2 times
    await page.keyboard.press("Tab")
     await page.keyboard.press("Tab")

    
    //8 ctrl+v
    
     await page.keyboard.press("Control+V")
    

    await page.waitForTimeout(3000)

})
