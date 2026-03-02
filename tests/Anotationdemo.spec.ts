import { test, expect } from "@playwright/test";


/*
only 
skip
fail
fixme
slow


• only - Focus mode. Runs only this test and Skips all other tests. 
• skip - Skip this test (Does not run). 
 
• fail - Marks test as expected to fail 
• fixme - Marks test to fix; automatically skips ,  
• slow - Extends timeout triple.

*/
/*

test fail

.Because you told Playwright “this test should FAIL” (test.fail) 
and the test actually FAILED, Playwright considers that a SUCCESS — so it shows PASSED in the report.


.If a test case is marked with test.fail, but the test actually passes, 
Playwright throws an error saying “Expected to fail, but passed”.

*/


 test("test1", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test1")
    


}) 


/* test.fail("test2", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
   await expect(page).toHaveTitle(" ")
    
 console.log("this is Test2")

})
 */
 test("test3", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
   await expect(page).toHaveTitle("Google")
    
 console.log("this is Test3")

}) 

 /* test.skip("test4", async ({ page }) => {

    

    await page.goto("https://www.google.com/")
    
   await expect(page).toHaveTitle("Google")
    
 console.log("this is Test4")

})  */



 //Conditionally skip a test
//You can skip certain test based on the condition.

test('skip this test', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Still working on it');

    
    await page.goto("https://www.google.com/")
    
   await expect(page).toHaveTitle("Google")
    
 console.log("this is Test for skip")
    
});