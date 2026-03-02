/*
CSS Selector Type               CSS Format 
Tag with ID                      tag#id,  here id means value stored under id 
Tag with Class                  tag.classname 
Tag with Attribute              tag[attribute="value"] 
Tag with Class and Attribute    tag.classname[attribute="value"] 

Note tag name is Optional 

according to me sometimes it is not optional when u get multiple web element then u tag name 

means we can use #id like this 


*/


import { test, expect } from "@playwright/test"


test("Verify cess locator", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")

    /* await expect(page.locator("#small-searchterms")).toBeVisible()
    
    await page.locator("#small-searchterms").fill("t-shirt") */





   
    




    // by class = css selector => tag.class
    // in class - do not take value after the spaces

   // await page.locator(".search-box-text").fill("t-shirt")

    // or 
   // await page.locator("input.search-box-text").fill("t-shirt")






    // Tag with Attribute =>  tag[attribute="value"]

    
    // await page.locator("input[value='Search store']").fill("t-shirt")
    




     //Tag with Class and Attribute =>  tag.classname[attribute="value"]

    // await page.locator("input.search-box-text[value='Search store']").fill("t-shirt")
    
    await page.locator(".search-box-text[value='Search store']").fill("t-shirt")

    
     await page.waitForTimeout(5000)

})