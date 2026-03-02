import { test, expect } from "@playwright/test";


/* test("test1", async ({ page }) => {
    

    await page.goto("https://www.demoblaze.com/index.html")



    await page.getByRole('link', { name: 'Log in' }).click()
    

    const username =  page.locator('#loginusername')
   await username.fill("pavanol")
   

  const   password = page.locator('#loginpassword')
      await password.fill("test@1234")
    

    const loginbutton = page.getByRole('button', { name: 'Log in' })
      await  loginbutton.click()
    
 await page.waitForTimeout(2000)
    
    const logout = page.getByRole('link', { name: 'Log out' })

   await  expect(logout).toBeVisible()
     await   logout.click()


}) */



test.describe("Group1", () => {

    test("test1",   async () => {
    
    console.log(" this is  Test1")


})

})

test.describe("Group2", () => {

    test("test2",   async () => {
    
    console.log(" this is  Test2")


})

})



