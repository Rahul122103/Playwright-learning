import { test, expect, Locator } from "@playwright/test";


test("verify auto waits", async ({ page }) => {
    

    await page.goto("https://www.demoblaze.com/")

    const aboutus: Locator = page.getByRole('link', { name: 'About us' })

    
    // for this action it autowaits , check some actionalable checks first then execute this requested action 
    /*
    Playwright performs a range of actionability checks on the elements before making actions to ensure these
     actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs 
     the requested action. If the required checks do not pass within the given timeout, 
     action fails with the TimeoutError.

For example, for locator.click(), Playwright will ensure that:

.locator resolves to exactly one element
.element is Visible
.element is Stable, as in not animating or completed animation
.element Receives Events, as in not obscured by other elements
.element is Enabled


1.Visible	2.Stable	3.Receives Events	4.Enabled	5.Editable

it will check 1st these action then executes the main actions 


    */
  //  await aboutus.click()
    
    // same for assertion  
    /*
Playwright includes auto-retrying assertions that remove flakiness by waiting until the condition is met, 
similarly to auto-waiting before actions.
    */

    await expect(aboutus).toBeVisible()
    

    await page.getByRole('link', { name: 'Log in' }).click({ force: true})
    // force option that disables non-essential actionability checks,
    //  for example passing truthy force to locator.click() method 
    // will not check that the target element actually receives click events.
    
    // Over all it not check the condition 
    // 1.Visible	2.Stable	3.Receives Events	4.Enabled	5.Editable
    // just perform the requested action

    
    await page.locator("#loginusername").fill("Rahul",{force:true})
    

    await page.waitForTimeout(3000)
    
})