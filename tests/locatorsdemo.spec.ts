/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/





import { test, expect, Locator } from "@playwright/test"


test("Verify locaters", async({page}) => {
    
    await page.goto("https://demo.nopcommerce.com/")

    /*
page.getByAltText() to locate an element, usually image, by its text alternative.

this is for locating to image , because mostly image stored in alt attribute 
    */
    
    const logo: Locator = page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()



    /* page.getByText() to locate by text content.
    We recommend using text locators to find non interactive elements like div, span, p, etc.

    Use when user try to locat only text conten 

    //  <span>Welcome, John</span>
    // <h2>Welcome to our store</h2>


    */

   /*  let welcometext: Locator = page.getByText("Welcome to our store")
  await  expect(welcometext).toBeVisible() */
    
    await expect(page.getByText("Welcome to our store")).toBeVisible() // full string 
    await expect(page.getByText("Welcome")).toBeVisible() // sub string

    




    // page.getByRole()
    /* page.getByRole() is a Playwright locator that finds elements based on their accessibility role and accessible name.
    

getByRole() finds what the element is, not where it is.
It locates elements by their purpose, not their structure.


3️⃣ What getByRole() actually does (conceptual)

When you write:

page.getByRole('button', { name: 'Login' });


Playwright:

Looks at the accessibility tree (not raw DOM only)

Finds elements whose role is button

Matches the accessible name (Login)

Returns a Locator

👉 It’s semantic, not structural.



2️⃣ What does “role” mean here?

A role describes the purpose of an element for users and assistive technologies.

Examples of roles:

button

link

textbox

checkbox

heading

img

list

menuitem



    */
    
    
    /* await page.getByRole("link", {name:"Register"}).click()


    await expect(page.getByRole("heading",{ name:"Register"})).toBeVisible()
 */





    // page.getByLabel() - It finds inputs using their label text.
    /*  page.getByLabel() to locate a form control by associated label's text.
    mostly use to fill the form


    */
    

  /*  await page.getByLabel("First name:").fill("Rahul")
   await page.getByLabel("Last name:").fill("Raj")
    await page.getByLabel("Email:").fill("Raj@gmail.com")
     */




    // getByPlaceholder()
/*
page.getByPlaceholder() locates input elements using their placeholder text. It is useful when no label is present,

It finds inputs by their placeholder text.
-value present in Placeholder attributes 

*/
    
    
   await page.getByPlaceholder("Search store").fill("Apple")

    
    
    
    
    
    
    // page.getByTitle() to locate an element by its title attribute.

  // await page.getByTitle("Show products in category Electronics").click()

    
    await page.getByTitle('Show products in category Electronics').first().click()

    /*
    ✅ .first()

Selects the first matched element

await page.getByTitle('Show products in category Electronics').first().click();


✅ .last()

Selects the last matched element

await page.getByTitle('Show products in category Electronics').last().click();

✅ .nth(index)

Selects element by zero-based index

await page.getByTitle('Show products in category Electronics').nth(0).click();


0 → first

1 → second

2 → third

    */
    
    
    
    
    
    /*

    👉 page.getByTestId() creates a locator that finds elements using a 
    dedicated test-only attribute (usually data-testid).

2️⃣ What is a test id?

A test id is a special HTML attribute added only for automation/testing, not for UI or styling.

Example:

<button data-testid="login-btn">Login</button>


Playwright:

page.getByTestId('login-btn');




6️⃣ Customizing the test id attribute

Playwright defaults to:

data-testid


But you can configure it:

use: {
  testIdAttribute: 'data-test'
}


Then:

<button data-test="login-btn">


    */




    




    



})