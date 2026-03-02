
/*
Why is it called spec.ts?

spec = specification (means test scenario)

.ts = TypeScript file

So,
👉 login.spec.ts = test specifications for login feature


*/

import { test, expect } from "@playwright/test"

/*
1️⃣ What is test in Playwright?
Simple meaning

👉 test is used to define a test case.

Think of it as:

“This is one scenario I want to check.”



2️⃣ What is expect in Playwright?
Simple meaning

👉 expect is used to validate the result of a test.

Think of it as:

“Check if this condition is true.”




*/


/* fixture 
One-line definition

👉 A fixture is a managed dependency that the Playwright test runner creates, provides to a test, and cleans up automatically.

It exists outside your test logic but is injected into your test when it runs.


What a fixture is (conceptually)

A fixture is not:

.a test

.a helper function

.a global variable

A fixture is:

.a prepared object or setup

.created before the test runs

.destroyed after the test finishes

.controlled by the Playwright test runner

*/



/*
1️⃣ What is the Page fixture?

👉 The Page fixture is a built-in Playwright fixture that provides a fully initialized Page object (a browser tab) to a test.

It is created, managed, and destroyed by the Playwright test runner.


2️⃣ What exactly is a Page?

Technically:

Page is a Playwright class

It represents one browser tab

It exposes APIs to interact with the UI:

navigation

clicks

typing

reading DOM

waiting for conditions

The Page fixture’s job is to give you this Page instance without manual setup.



3️⃣ What the Page fixture does (step-by-step internally)

For every test, Playwright does the following:

Ensures a browser instance is available

Creates a new browser context (clean session)

Opens a new page (tab)

Injects this page into the test as page

Runs the test code

Closes the page and context after the test finishes
*/
test("Page title", async({ page }) => {
    
    await page.goto("http://www.automationpractice.pl/index.php")

   console.log(await page.title())


    await expect(page).toHaveTitle("My Shop")
    
    //console.log("Rahul Raj")



    

})
