/*
test.beforeAll() 
• Purpose: Runs once before all tests in a file or a describe block. 
• Use Case: Initialize shared resources like launching a browser or setting up test data.

test.afterAll() 
• Purpose: Runs once after all tests in a file or a describe block. 
• Use Case: Clean up resources like closing the browser or deleting test data.


test.beforeEach() 
• Purpose: Runs before each individual test. 
• Use Case: Set up a fresh state like opening a new page or logging into an app.

test.afterEach() 
• Purpose: Runs after each individual test. 
• Use Case: Clean up after each test like closing the page or clearing local storage.



*/


import { test, expect, Locator,Page  } from "@playwright/test";

// Need to understand one thing

// here we have to make page as global variable becuase before all run before all test , so same page should be
// applied for all test


let page: Page;

test.beforeAll( async({browser }) => {
     page =  await browser.newPage()

  await  page.goto("https://www.demoblaze.com/index.html")
    
     
})


test.afterAll(   async() => {
   await page.close()

})



test.beforeEach("login", async () => {
   
  await page.waitForLoadState()
   
   await page.getByRole('link', { name: 'Log in' }).click()
  
    await page.waitForTimeout(3000)

    const username =  page.locator('#loginusername')
   await username.fill("pavanol")
   

  const   password = page.locator('#loginpassword')
      await password.fill("test@123")
    

    const loginbutton = page.getByRole('button', { name: 'Log in' })
      await  loginbutton.click()
    
   
})


test.afterEach("logout", async () => {

   await page.waitForLoadState()
   

    const logout = page.getByRole('link', { name: 'Log out' })

   await  expect(logout).toBeVisible()
  await logout.click()

   

})



test("count all products",async () => {
   
   const product: Locator = page.locator("#tbodyid a.hrefch")
   
   const prductcount = await product.count()
   
   expect(prductcount).toBe(9)
   


})


test("add to cart", async () => {
   
   await page.getByText('Samsung galaxy s6', { exact: true }).click()
   


   page.on('dialog',async (dialog) => {

      expect(dialog.message).toContain("Product added")
    await  dialog.accept()
      
   })


 await  page.getByText('Add to cart', { exact: true }).click()
   
})



/*
Interview One-Liners (Use These 🔥)

beforeAll → runs once before all tests

beforeEach → runs before every test

afterEach → runs after every test

afterAll → runs once after all tests


*/