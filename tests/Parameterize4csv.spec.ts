/*

prerequisite 

npm install csv-parse


*/


import { test, expect } from "@playwright/test";

import fs from 'fs'

import {parse} from 'csv-parse/sync'


/* const text = '{ "name": "Rahul", "age": 25 }';

const obj = JSON.parse(text);

console.log(obj); // { name: 'Rahul', age: 25 }
console.log(obj.name) */


/*
Parsing is the process of converting raw text into structured data 
that a program can understand and work with.

*/

const csvpath = "testdata/Book1login.csv"

const csvdata = fs.readFileSync(csvpath, 'utf-8')

//const csvdataB = fs.readFileSync(csvpath)

// console.log(csvdata)
   
const logdata:any = parse(csvdata,  {
    columns:true,
    skip_empty_lines: true,

  //  bom:true   // it remove hiddens lables 
    
})

// when data is not correct we can use bom:true;

/*

1️⃣ What columns: true means (plain English)

columns: true tells the CSV parser:

“Use the first row of the CSV as column names (keys).”



1️⃣ What skip_empty_lines: true means (plain English)

skip_empty_lines: true tells the CSV parser:

“If there is an empty line in the CSV file, ignore it completely.”






*/
 

test.describe("verify search Group CSV", () => {

    for (const {email,password,validity} of logdata) {

        /* const email = data.email
        const password = data.password
        const validity = data.validity */
    
// {email,password,validity}



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