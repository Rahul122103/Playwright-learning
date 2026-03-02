import { test, expect, Locator } from "@playwright/test"



test("Verify xpath locator", async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/")


    const logo: Locator = page.locator("//img[@src='/Themes/DefaultClean/Content/images/logo.png']")
    
    await expect(logo).toBeVisible()
    

     const logoA: Locator = page.locator("//img[@src='/Themes/DefaultClean/Content/images/logo.png' and @alt='Tricentis Demo Web Shop']")
    
    await expect(logoA).toBeVisible()
    

     const logoB: Locator = page.locator("//img[@src='/Themes/DefaultClean/Content/images/logo.png' or @alt='Tricentis Demo Web Shop']")
    
    await expect(logoB).toBeVisible()
    


    // Contain() function
    /*
What is contains() in XPath? (start here)

👉 contains() is an XPath function used to match elements whose text or attribute value contains a given substring.

It answers:

“Does this text/attribute include this value anywhere inside it?”

    */
    
    
    
    
    
    let proudct: Locator = page.locator("//h2//a[contains(@href,'computer')]")
    
  let productcount:number= await proudct.count()
    console.log(productcount) // check count that how much element matched with this locator
    
    expect(productcount).toBeGreaterThan(0)


    // now priny every value with textcontent()

   // text content only work for 1 web element , if locator give more then 1 web element then u should use indexes

    // console.log(await proudct.textContent())  // text content only work for 1 web element


    /*
    1️⃣ What is textContent()? (Start Here)

textContent() reads the text written INSIDE an HTML element.

It answers one simple question:

“What text is present between the opening and closing tag of this element?”

2️⃣ Basic HTML Example (Very Important)
HTML
<p>Hello Rahul</p>

Playwright
const text = await page.locator("p").textContent()
console.log(text)

Output
Hello Rahul


✔ Because text exists inside <p>...</p>

    */

  await proudct.first().textContent()
    
    console.log("first element with first() method ", await proudct.first().textContent())
    
    console.log("first element with nth() method ", await proudct.nth(0).textContent())
    

    console.log("first element with last() method ",await proudct.last().textContent())


    await page.waitForTimeout(2000)
    


    // suppose if user want to print all the text from that locator ( if text present)

    
console.log("===== Print all text ========")
    let allelemt: string[] = await proudct.allTextContents()
    
    for (let pt of allelemt) {
        console.log(pt)
    }




    // XPath with starts-with() Function

    /*
 Matches elements whose attribute values start with a specified string. 
• XPath Format: //*[starts-with(@id, 'user')] 
• Example XPath: //h2//a[starts-with(@href,'/build')] 
• WebElement Example: Selects products whose name starts with "build" under 
Featured Products. 
Note: The starts-with() function is helpful for dynamic elements whose IDs or classes are 
partially consistent.

    */
    
    
    let product2 = page.locator("//h2//a[starts-with(@href,'/build')]")
    
    let allproduct2: number = await product2.count()
    
    console.log(allproduct2)


    expect(allproduct2).toBeGreaterThan(0)




    // last()
/*
 XPath with last() Function 
• Selects the last element in a set of matching nodes. 
• XPath Format: //input[last()] 
• Example XPath: //div[@class='column follow-us']//li[last()] 
• WebElement Example: Selects Google+ under the FOLLOW US footer menu. 
Note: The last() function is useful when you want the last occurrence of an element. 

*/

    let googlelink: Locator = page.locator("//div[@class='column follow-us']//li[last()]")
    
    await expect(googlelink).toBeVisible()
    




    // text()

    /*
    9. XPath with text() Function 
• Selects elements based on the exact text content of the element. 
• XPath Format: //*[text()='Login'] 
• Example XPath 1: //*[text()="Register"] – Selects the Register link. 
• Example XPath 2: //*[contains(text(), "Fiction")] – Selects all product titles under 
Books that contain "Fiction".
    */
    
    
    
    let register = page.locator("//a[text()='Register']")
    
    await expect(register).toBeVisible()
    




    // postiton()



    /*
XPath with position() Function 
• Selects an element based on its position in the list of matching nodes. 
• XPath Format: //input[position()=2] 
• Example XPath: //div[@class='column follow-us']//li[position()=2]
    */
    
    
    let linkA: Locator = page.locator("//div[@class='column follow-us']//li[position()=2]")

    expect(linkA).toBeVisible()





    
    
    
    


    
})