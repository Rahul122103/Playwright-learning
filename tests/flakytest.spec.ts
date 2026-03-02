import { test, expect } from "@playwright/test";

test("flky test", async ({ page }) => {
    
    

    await page.goto("https://www.demoblaze.com/index.html")



  await page.getByRole('link', { name: 'Log in' }).click()
  
    await page.waitForTimeout(3000)

    const username =  page.locator('#loginusername')
   await username.fill("pavanol")
   

  const   password = page.locator('#loginpassword')
      await password.fill("test@123")
    

    const loginbutton = page.getByRole('button', { name: 'Log in' })
      await  loginbutton.click()
    
 await page.waitForTimeout(2000)
    
    const logout = page.getByRole('link', { name: 'Log out' })

   await  expect(logout).toBeVisible()
  await logout.click()

    

})