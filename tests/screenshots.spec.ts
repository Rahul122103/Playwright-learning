import { test, expect } from "@playwright/test";
import { timeStamp } from "node:console";




test("Take screenshot local", async ({ page }) => {
    

    await page.goto("https://demowebshop.tricentis.com/")
    
    // await page.screenshot({ path: 'C:/Users/Rahul/Pictures/Playwrightscreenshot/new1.png' }) // store in your machine

    // in Path = we take path and file name both
    


    // await page.screenshot({ path: 'screenshots/homepage.png' }) // store in your project , we can take full or relative path both
    
    

    // it is overriding the old screenshot - 
    // we can use time so that it can not override 
    
    //  const  time   = Date.now()
     
     
 //   await page.screenshot({ path: 'screenshots/homepage' + time + '.png' })
    

    // Capture the full page screenshot

   // await page.screenshot({ path: 'screenshots/fullpage' + time + '.png', fullPage: true })
   
   
   
   // Capture the particular locator
   
   /*  const logo = page.getByAltText('Tricentis Demo Web Shop')
    
    await logo.screenshot({ path: 'screenshots/logo.png' })
     */

    // capture the particular section

   const products = page.locator(".product-grid.home-page-product-grid")
   await products.allInnerTexts()
   



    
   
    




    

    


})



test.only("Take screenshot from configuration", async ({ page }) => {
    

    await page.goto("https://demowebshop.tricentis.com/")
    

    const products = page.locator(".product-grid.home-page-product-grid")
    
   await page.getByRole('link', { name: 'Register' }).click()
   

   // when screenshot:'on'  then it will take screenshot of last action screen or page, provide screenshot in test result folder

   
   // when screenshot:'only-on-failure'   then it will take screen of failed screen
   // and provide screen in test results folder and also in HTML report
    




    

    


})