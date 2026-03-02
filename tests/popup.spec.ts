import { test, expect } from "@playwright/test";



test.only("Verify popup", async ({ browser }) => {
    
    const context = await browser.newContext()
    
    const parentpage = await context.newPage()
    

    await parentpage.goto("https://testautomationpractice.blogspot.com/")
    

      await  Promise.all([parentpage.waitForEvent('popup'),

          parentpage.getByRole('button', { name: 'Popup Windows' }).click()])
    
    
    const allpopus = context.pages()
    
    console.log(allpopus.length)

    console.log(allpopus[0].url())

    console.log(allpopus[1].url())


    console.log ( await allpopus[0].title())

    console.log( await allpopus[1].title())
    
  //  console.log(allpopus[2].url())

    

    
    
    
    
    
    

    

    

    
    
    
    
})




test("Verify popup A", async ({ browser }) => {

  const context = await browser.newContext();
  const parentpage = await context.newPage();

  await parentpage.goto("https://testautomationpractice.blogspot.com/");

  // Click to open popups
  await parentpage.getByRole('button', { name: 'Popup Windows' }).click();

  // ✅ WAIT until parent + 2 popups exist
  await expect.poll(() => context.pages().length).toBe(3);

  const popups = context.pages();

  const popup1 = popups[1];
  const popup2 = popups[2];

  await popup1.waitForLoadState();
  await popup2.waitForLoadState();

  // Work on popup 1
  console.log(await popup1.title());
    console.log(popup1.url());
    
    await popup1.close();
    
    

  // Work on popup 2
  console.log(await popup2.title());
  console.log(popup2.url());
  await popup2.close();
});
