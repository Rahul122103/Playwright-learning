import { test, expect } from "@playwright/test";

import * as XLSX from "xlsx"



// Step 1️⃣ Read the Excel file

const workbook = XLSX.readFile("testdata/logindataexcel.xlsx")

/*
What actually happens:

Library reads binary bytes

Understands Excel structure

Loads entire file into memory

👉 This creates a workbook object

*/
// console.log(workbook)





// Step 2️⃣ Get sheet names

const sheetname = workbook.SheetNames[0]
     /*
     What actually happens:

Excel can have multiple sheets

This gives you the list of sheet names

[0] means first sheet

example 
[sheet1,sheet2,sheet3,sheet4]


     */

// console.log(sheetname)




// Step 3️⃣ Get the sheet

const sheetdata = workbook.Sheets[sheetname]
//  console.log(sheetdata)
 
/*

What actually happens:

You select one sheet

Now you have raw cell data of that sheet

At this point:

Data is still Excel-style

Not easy to use yet


*/







// Step 4️⃣ Convert sheet to JSON (MOST IMPORTANT)

const logindataexcel: any = XLSX.utils.sheet_to_json(sheetdata)
  
// console.log(logindataexcel)




test.describe("verify search Group xlsx", () => {

    for (const {email,password,validity} of logindataexcel) {

        /* const email = data.email
        const password = data.password
        const validity = data.validity */
    
// {email,password,validity}



        test(`verify login xlsx ${email} , and ${password} `, async ({ page }) => {
    

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
            

                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            
            }
    
        
    


       

        })

    }

})

   
