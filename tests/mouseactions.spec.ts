import { test, expect } from "@playwright/test";


test("Verify the mouse hover", async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    

    const pointme = page.getByRole('button', { name: 'Point Me' })
    
    await pointme.hover()

    
    
    const laptop = page.locator(".dropdown-content a").last()

    await laptop.hover()
    
    await page.waitForTimeout(2000)
    
})


test("Verify the right click", async({page}) => {
    
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    

    const rightclick = page.getByText('right click me', { exact: true })
  await  rightclick.click({button:'right'})
    
    await page.waitForTimeout(2000)
    
})


test.only("Verify the double click", async({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    

    const copytext = page.getByRole('button', { name: 'Copy Text' })

    await copytext.dblclick()

    const field2 = page.locator("#field2") 

  await  expect(field2).toHaveValue("Hello World!")
    
    await page.waitForTimeout(2000)
    

})


