import { test, expect, chromium ,Page} from "@playwright/test";



test("handle the multiple tabs", async() => {
    
    const browser = await chromium.launch()

    const context = await browser.newContext()
    
    const parentpage = await context.newPage()
    

    await parentpage.goto("https://testautomationpractice.blogspot.com/")
    

    
    

       
    const [childpage]  =  await Promise.all([ context.waitForEvent('page')
        ,  parentpage.getByRole('button', { name: 'New Tab' }).click()])
    
  
 //    await context.waitForEvent('page')

    // await parentpage.getByRole('button', { name: 'New Tab' }).click()
    
    /*
What is Promise.all()? (one-line)

👉 Promise.all() runs multiple promises in parallel and waits until ALL of them are finished.


Promise.all() executes multiple promises in parallel and resolves when all succeed or rejects when any one fails.

1️⃣ What is context.waitForEvent('page')?

👉 It tells Playwright: “Notify me when a new page (tab/window) is created in this browser context.”

In simple words:

“I am waiting for a new tab to open.”

2️⃣ Why is it on context, not page?

Because:

A new tab is created by the browser context

Not by an existing page

So Playwright listens at the context level, where all pages (tabs) live.

Remember hierarchy:

Browser
 └── Context   ← new pages are born here
      ├── Page (old tab)
      └── Page (new tab)

    */

    console.log("child page title: ",await childpage.title())
    
    console.log("Parent page title: ", await parentpage.title())


    // different approch

    const openpage: Page[] = context.pages()  // it will tell how many pages are opens
    
    console.log(openpage.length)

   console.log(await openpage[0].title())
   console.log( await openpage[1].title())
   


})