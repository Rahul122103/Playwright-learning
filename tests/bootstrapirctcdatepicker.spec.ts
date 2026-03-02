import { test, expect } from "@playwright/test";



test("irctc", async ({ page }) => {
    
    await page.goto("https://www.irctc.co.in/nget/train-search")


    waitUntil: 'domcontentloaded'
    timeout: 60000

  // await page.waitForTimeout(2000)
})