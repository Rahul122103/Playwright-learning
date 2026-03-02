import { test, expect, chromium } from "@playwright/test";


test("Browser settings", async () => {
    
    const browser = await chromium.launch({headless:false
    })
    
    const context = await browser.newContext(
        
        {
           /*  viewport: {
                height: 800,
                width:800
            },

 */
          /*  proxy: {
    server: 'http://proxy.example.com:8080',
    username: 'user',
    password: 'pass'
  } */
      
            
            
        
        } 
    )

    await context.addCookies([
        {
            name: 'Rahul',
            value: "12345",
            // url: 'https://www.google.com/',
            domain: 'google.com',
            path: '/',

            // Cookie should have a url or a domain/path pair
            
        }
    ])
    
    const page = await context.newPage()
    

    await page.goto("https://www.google.com/")

    const cookies = await context.cookies();
console.log(cookies);

    
    for (const cookie of cookies) {
    console.log(`${cookie.name} : ${cookie.value}`);
  }

    await context.clearCookies()
    
 const cookiesAfterClear = await context.cookies();
console.log("Cookies after clear:", cookiesAfterClear);
    
   


    await page.waitForTimeout(5000)
    

})