import { test, expect } from "@playwright/test";

test("Verify infinite scrolling", async ({ page }) => {
    
    test.setTimeout(120_000)
   // test.slow()
    await page.goto("https://www.booksbykilo.in/new-books")

  
  //  await page.waitForLoadState()

   /* await page.getByRole('heading', { name: 'The Story Of My Assassins' }).scrollIntoViewIfNeeded()

    const book1 = page.getByRole('heading', { name: 'The Story Of My Assassins' })
    
   await  book1.click()

     */
    let previousheight = 0
    let bookfound = false;

    
    while (true) {


        const book1 = page.getByRole('heading', { name: 'The Story Of My Assassins' })
        if (await book1.isVisible()) {

            await book1.click()

             await  page.waitForTimeout(3000)

            bookfound = true

            expect(bookfound).toBeTruthy()

            console.log("book is found")
  

            break;
            
        }
        
      
  
    
        // this will scroll till bottom 
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight)
        })

        
      await  page.waitForTimeout(2000)


     const  currentheight =    await page.evaluate(() => {
           return  document.body.scrollHeight
     })
        console.log("previous heigh", previousheight)
        console.log("current height",currentheight)
        
        if (currentheight === previousheight) {
            break;
        }
    
        previousheight=currentheight

    }


    // await  page.waitForTimeout(2000)
    
    if (bookfound === false) {
        
        console.log("Book is not found")
        
    }
    
    


    

})


test.only("Verify Count of books", async ({ page }) => {
    
    test.setTimeout(180_000)
   // test.slow()
    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500")

 


    let previousheight = 0

    let totalcount =0
    let totalbooks =0
    
    while (true) {


        
        const books = await page.locator("#productsDiv  h3").all()

        totalcount = totalcount + books.length
        

        const bookscount = page.locator("#productsDiv  h3")
         totalbooks = await bookscount.count()+totalbooks
        
      
  
    
        // this will scroll till bottom 
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight)
        })

        
      await  page.waitForTimeout(2000)


     const  currentheight =    await page.evaluate(() => {
           return  document.body.scrollHeight
     })
        console.log("previous heigh", previousheight)
        console.log("current height",currentheight)
        
        if (currentheight === previousheight) {
            break;
        }
    
        previousheight=currentheight

    }


    // await  page.waitForTimeout(2000)
    
   
    
    console.log("total books", totalcount)
    console.log("total books by count method",totalbooks)

    

})

test('Count Total Books in the page', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test

  let booksCount = 0;
  let previousHeight = 0;

  while (true) {
    
     // Get all book titles currently loaded on the page
    const books = await page.locator('#productsDiv h3').all();

    // Check if the target book is in the list
    booksCount=booksCount+books.length; //Each time the loop runs, it's counting all the books on the page, including those already counted in previous iterations.
   // booksCount=books.length; // This will exactly count total number of books.
    
    // Scroll to the bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait for new content to load
    await page.waitForTimeout(2000);
  
    // Get current scroll height
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });

    console.log("==============================")
    console.log(`Previous height: ${previousHeight}`);
    console.log(`Current height: ${currentHeight}`);

    // Check if end of page is reached
    if (currentHeight === previousHeight) {
      break;
    }

    previousHeight = currentHeight;
  }
  
  console.log('*********  Reached end of page  ********');

  console.log("Total Number of books:",booksCount); //410

});