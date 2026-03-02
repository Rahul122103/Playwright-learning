import { test, expect } from "@playwright/test";

/*
What is Visual Testing?

Visual testing means checking that the UI looks the same as before.

Not logic.
Not API.
Only how the page looks.

Why Visual Testing is needed

Normal assertions check:

text

button exists

URL

But they cannot detect:

broken layout

shifted button

missing icon

CSS issues

Visual testing catches these.


saved imgaes are Baseline image or golden image 


First run: Playwright saves the snapshot. 
Later runs: It compares new screenshots with the saved ones.
*/


test("verify visual testing", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")
  //  await page.goto("https://demowebshop.tricentis.com/register")

  // await page.waitForLoadState()
    
  //  expect(await page.screenshot()).toMatchSnapshot("newsnap.png") // 1st approch
    

    await expect(page).toHaveScreenshot()

    
//  verify UI of particular element

    const logo = page.getByRole('img', { name: 'Tricentis Demo Web Shop' })
    
  await expect(logo).toHaveScreenshot()


    const regA= page.getByRole('link', { name: 'Register' })

  const reg = await regA.ariaSnapshot()
  console.log(reg)

  expect(await regA.screenshot()).toMatchSnapshot("register.png")
  


    

})