/*
1️⃣ What is an Auto-Retrying Assertion?
👉 Meaning

An auto-retrying assertion is an assertion that:

Keeps checking the condition

Retries automatically

Stops when:

Condition becomes true ✅

Timeout is reached ⏱️ (default 5s)

These are also called web-first assertions.

// it will check the condition again and again till condition is matched (till timeout )
//These assertions are used on locators or pages and are asynchronous, which means they 
return a Promise, so you must use await.




2️⃣ Common Auto-Retrying Assertions

These ALL auto-retry:

toBeVisible()
toBeHidden()
toHaveText()
toHaveCount()
toBeEnabled()
toBeDisabled()
toBeChecked()
toHaveValue()
toHaveAttribute()




*/


/*
What is a Non-Retrying Assertion?
👉 Meaning

A non-retrying assertion:

Runs only once

Does not wait

Fails immediately if condition is false

Playwright cannot retry these because they work on plain JS values.

These assertions are used on values (like strings, booleans, numbers) and are synchronous, 
meaning they do not return a Promise, so you don’t need await.



*/



import { test, expect } from "@playwright/test";

test("verify Retrying assertion and non retrying assertion", async ({ page }) => {
    

    await page.goto("https://www.demoblaze.com/")


    await expect(page).toHaveURL("https://www.demoblaze.com/") // Auto-Retrying Assertions
    
    await expect(page).toHaveTitle("STORE")


    const textvalue = await page.getByRole('link', { name: 'Sign up' }).innerText()
    
    expect(textvalue).toBe("Sign up") //non-retrying assertions

    expect(textvalue).toContain("Sign up") //non-retrying assertions
    


})




/*

1️⃣ What is a Hard Assertion?
👉 Meaning

A hard assertion:

Stops the test immediately when it fails

Test execution does NOT continue

This is the default behavior in Playwright


2️⃣ What is a Soft Assertion?
👉 Meaning

A soft assertion:

Records the failure

Test continues execution

Test fails at the end if any soft assertion failed

Used when you want to collect multiple failures in one run.


*/

test.only("verify hard and soft assertion", async ({ page }) => {
    

    await page.goto("https://www.demoblaze.com/")


    await expect.soft(page).toHaveURL("https://www.demoblaze.com/") 
    await expect.soft(page).toHaveTitle("STORE1")


    const textvalue = await page.getByRole('link', { name: 'Sign up' }).innerText()
    
    expect.soft(textvalue).toBe("Sign up") 

    expect.soft(textvalue).toContain("Sign up") 
    


})