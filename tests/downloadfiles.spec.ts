import { test, expect } from "@playwright/test";

import fs from 'fs';




// 1st we create a folder to save the files
// 2nd it is event , so we using waiteventlistener

// 3rd for checking the files is upload or not we useing the javascript module ('fs'=>file system) 


test("Download the txt fiels", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")


    await page.getByRole('textbox', { name: 'Enter Text:' }).fill("Welcome")
    
   await page.getByRole('button', { name: 'Generate and Download Text File' }).click()


    
    
  const [dwnld] = await Promise.all([page.waitForEvent('download'), page.locator('#txtDownloadLink').click()])

    /*
    What is page.waitForEvent('download')?

👉 It waits for a file download to start on that page and then gives you the Download object.

In plain English:

“I am listening for a download. When a file starts downloading, give me control.”


// What happens step by step

1️⃣ Playwright starts listening for download
2️⃣ User action triggers file download
3️⃣ Browser begins download
4️⃣ Playwright captures the download
5️⃣ download object is returned


Final takeaway (lock this)

Downloads are events.
Listen first → then click → then handle file.

    */

    
    // Now give the path and name of the files
    
    const filestorepath = "downloads/info.txt"
    
    await dwnld.saveAs(filestorepath)
    
    expect(dwnld).toBeTruthy()

    // we can use diffrent assertion using fs , it is Node.js code not playwright

    const checkfiles = fs.existsSync(filestorepath)
    

    expect(checkfiles).toBeTruthy()

    


    
})