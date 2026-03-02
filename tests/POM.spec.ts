/*

Page Object Model (POM) — Simple Explanation

Page Object Model (POM) is a test automation design pattern where each web page is represented 
as a separate class, and that class contains:

Page elements (locators)

Page actions (methods)

The test file only calls these methods instead of directly interacting with the page.

*/





import { test, expect } from "@playwright/test";

import { loginpage } from "../pages/loginPage";  // in {} we use class name and inside "" we use folder name
import { TIMEOUT } from "node:dns";
// . represent the location of project


test("verify login", async ({ page }) => {

    test.slow()
    

    await page.goto("https://www.demoblaze.com/")
    

    // here we Create the object of loginPage

    const logp = new loginpage(page)
    
    await logp.logininfo("pavanol", "test@123")

  await page.waitForTimeout(5000)
    

    
   expect ( await logp.isloginsuccessfull()).toBeTruthy()
    

   await logp.logout()
    

})


