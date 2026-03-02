/*

1️⃣ What is a Frame? (start here)

👉 A frame is a webpage inside another webpage.

Technically:

Frames are created using <iframe> or <frame>

Each frame has its own DOM

Parent page cannot directly access inside elements



3️⃣ Why frames matter in Playwright

👉 Playwright can NOT interact with elements inside a frame using the normal page.locator().

Because:

page only sees the main document

Frame has a separate DOM

So Playwright needs:

A bridge to enter the frame


5️⃣ Key rule (LOCK THIS 🔒)

❌ You cannot access iframe elements directly
✅ You must switch context to the frame first

6️⃣ How Playwright represents frames

Playwright gives you:

Frame object → represents an iframe

Page object → represents main page

*/


import { test, expect, FrameLocator, Locator, Frame } from "@playwright/test";


test("verify frams with page.frame()", async ({ page }) => {
    

    await page.goto("https://ui.vision/demo/webtest/frames/")

    

    // By page.frame() method

    
    const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    
    if (frame1) {
        
       await frame1.locator("input[name='mytext1']").fill("Rahul")
    }

    else {
        console.log("frame is not available")
    }
// page.frame() is old way becuase if give null value as type also and it can only use with name attribute and URL only 

    
   
})


test.only("verify frams with page.frameLocator()", async ({ page }) => {
    

    await page.goto("https://ui.vision/demo/webtest/frames/")

    // By page.frame() method

    
    //  const frame1:FrameLocator = page.frameLocator("frame[src='frame_1.html']")
    //  const textfild:Locator = frame1.locator("input[name='mytext1']")
    //  await textfild.fill("Rahul");


    // Or i can write the same thing in single line
    

   /*  const namefild = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']").fill("Rahul");

    
   


    // excess frame3

    page.frameLocator("frame[src='frame_3.html']").locator("input[name='mytext3']").fill("Gauri")


   

   await page.frameLocator("frame[src='frame_3.html']")
        .frameLocator("iframe[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
    .getByLabel("Web Testing").check()


 */
    




    // verify frame 5
    
    const frame5: FrameLocator = page.frameLocator("frame[src='frame_5.html']")
    const frametxt5 = await frame5.locator("input[name='mytext5']").fill("Rahul Raj")
    

    const frame5link = await frame5.getByRole('link', { name: 'https://a9t9.com' }).click()
    

    const logo = frame5.getByAltText("Ui.Vision by a9t9 software - Image-Driven Automation")

    await logo.click()
    

    const framlist: Frame[] = page.frames()
    
    
    console.log("total framea", framlist.length)

    
    
    
    
    
   






     await page.waitForTimeout(2000)

    
    
   
})