/*

4️⃣ Combine destructuring + for...of

This line:

for (const [id, name] of users)


Is equivalent to writing:

for (const row of users) {
  const id = row[0];
  const name = row[1];
  console.log(id, name);
}


💡 Same logic, cleaner syntax


*/


import { test, expect } from "@playwright/test";



const logindata:string [][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["inavildtaylor1234@example.com", "test123", "invalid"],
    ["valid1234@example.com", "testcb123", "invalid"],
    ["", "", "invalid"]

    
]

for (const data of logindata) {

    const email = data[0]
    const password = data[1]
    const validity = data[2]
    

    test.describe("verify search @search Group", () => {
    




    test(`verify login for   ${email}, and  ${password}`, async ({ page }) => {
    

        await page.goto("https://demowebshop.tricentis.com/")

        await page.waitForLoadState()
    

        await page.getByRole('link', { name: 'Log in' }).click({ timeout: 2000 })
    

        await page.getByRole('textbox', { name: 'Email:' }).fill(email)
    
        await page.getByRole('textbox', { name: 'Password:' }).fill(password)

    
        await page.locator("input[value='Log in']").click()

        if (validity === 'valid') {
            
 await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({ timeout: 2000 })

        }


        else {
            
            const errormsg = page.getByText('Login was unsuccessful. Please correct the errors and try again.', { exact: true })
            
            await expect(errormsg).toBeVisible()
            

          await  expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            
}
    
        
    


       

    })



})

    }

    