import { test, expect, Locator } from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";




test("Verify accessibility testing", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")


    const result = await new AxeBuilder({ page }).analyze()
    

    console.log("analyze result",result)

    console.log("violation ",result.violations)
  //  expect(result.violations.length).toHaveLength(0) // result.viaolations is array
    


})


test("Verify accessibility testing -specific part,include()", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")


   await page.getByRole('link', { name: 'Log in' }).click()
    
   await page.waitForLoadState()
    
    
  await  page.locator("div .listbox").first().waitFor()

    const result = await new AxeBuilder({ page }).include("div .listbox").analyze()
    

    console.log("analyze result", result)
    
    console.log(result.violations.length)

    console.log(result.violations)


    expect(result.violations.length).toHaveLength(0)

    // exclude() - just opposite of include()

   

})

test("Verify accessibility testing -with Tags", async ({ page }) => {
    
   

await page.goto("https://demowebshop.tricentis.com/")


    const result = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa', 'wcag21a','wcag21aa']).analyze()
    

    console.log("analyze result",result)

    console.log("violation ",result.violations)
   expect(result.violations.length).toHaveLength(0) // result.viaolations is array
    
   

})

test("Verify accessibility testing-disableRule()", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")


    const result = await new AxeBuilder({ page }).disableRules(['duplicate-id']).analyze()

// diableRule() skip the id which is duplicate
    // or we can use particulatare id attribute name which user want to skip intentionaly example 'region'
    //disableRules(['region'])
    

    console.log("analyze result",result)

   // console.log("violation ",result.violations)
  //  expect(result.violations.length).toHaveLength(0) // result.viaolations is array
    


})

