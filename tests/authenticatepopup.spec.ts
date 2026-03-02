import { test,expect } from "@playwright/test";


test("verify authenticatepopup", async ({ browser }) => {
    
    const context = await browser.newContext()

    const page = await context.newPage()
    
    // await  page.goto("https://the-internet.herokuapp.com/basic_auth")
    
    // applying 1st approach

    // http://username:password@the-internet.herokuapp.com/basic_auth

   await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth")


    await page.waitForLoadState()
    
   const txtlocator =  page.locator("div[class='example'] p")
    const text = await txtlocator.innerText()
    
  await  expect(txtlocator).toHaveText(text)


    
    
    

})

// 2nd approched use credential in context
test.only("verify authenticatepopup with context", async ({ browser }) => {
    
    const context = await browser.newContext({
        httpCredentials:
        {
            username: 'admin',
                password:'admin'
            }
    })

    const page = await context.newPage()
    
     await  page.goto("https://the-internet.herokuapp.com/basic_auth")
    
    


    await page.waitForLoadState()
    
   const txtlocator =  page.locator("div[class='example'] p")
    const text = await txtlocator.innerText()
    
  await  expect(txtlocator).toHaveText(text)


    
    
    

})
