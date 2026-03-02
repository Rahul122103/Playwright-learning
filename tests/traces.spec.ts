import { test, expect } from "@playwright/test";


test.only("Traces demo", async ({ page }) => {
    

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


})



test("Manual Traces", async ({ page, context }) => {
  
 await context.tracing.start({
    screenshots: true,
    snapshots:true
  })
    

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
  


  await context.tracing.stop({path:'manualtraces.zip'});


})