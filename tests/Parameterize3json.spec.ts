import { test, expect } from "@playwright/test";

import fs from 'fs'



const jsonpath = "testdata/logindata.json"

const datafile = fs.readFileSync(jsonpath, 'utf-8')
// if we are not use utf-8 then it will shows data as bytes ,
// example 
/*
ef bb bf 22 65 6d 61 69 6c 22 2c 22 70 61 73 73 77 6f 72 64 22 2c 22 76 61 6c
 69 64 69 74 79 22 0d 0a 22 6c 61 75 72 61 2e 74 61 79 6c 6f 72 31 32 33 ... 151 more bytes>

*/

  
// console.log(datafile)

const logindata = JSON.parse(datafile)
// console.log(logindata[0].email)
   

/*
What is fs?

fs is Node.js’s built-in module for working with files on the system.
fs read the file from the system (means computer)

What is readFileSync?

It reads a file synchronously and blocks execution until reading is complete.
// this is the method in fs to read file 
Break the word:

read → read a file

File → from disk

Sync → wait until reading is finished

So it means:

“Read this file and do not move to the next line until the file is fully read.”

Real-life example:

You open a notebook and wait until you finish reading before continuing.





What is utf-8?

utf-8 is a text encoding that converts file data into readable text.
// It tells Node:

“Read this file as human-readable text”




Why JSON.parse is required?

Because files are read as strings, and JSON.parse converts that string into a usable JavaScript object.

to extract the value from json , we have to use Json.parse   to get the object 
from this object we can get the value of from json 



*/



    

test.describe("verify search Group CSV", () => {

    for (const {email,password,validity} of logindata) {

        /* const email = data.email
        const password = data.password
        const validity = data.validity */
    




        test(`verify login json ${email} , and ${password} `, async ({ page }) => {
    

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

    






 

