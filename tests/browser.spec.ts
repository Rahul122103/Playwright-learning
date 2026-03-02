import { test, expect, firefox, chromium, webkit } from "@playwright/test";

// browser>context>page
/*
browser are = chromium, webkit , firefox 
context = a fresh user , does not share anything to another context , a browser can have multiple context 

page = A page browser and context 
when we use page as fixture inside test it automatically launch a browser ( default set in config.ts and riun in default context )

we can create multiple page of a single context 



*/

test("verify btowser, context,page", async () => {
     // launch browser 
    const browser = await chromium.launch()
    

    // create new context for a browser 
    const context1 = await browser.newContext()
    
    // create page for same context
    const page1 = await context1.newPage()
    
    // create another page for same context

    const page2 = await context1.newPage()
    
    await page1.goto("https://playwright.dev/")
    
    await page2.goto("https://www.selenium.dev/")


    await page1.waitForTimeout(2000)

    await page2.waitForTimeout(2000)
})