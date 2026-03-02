import { test, expect, Locator } from "@playwright/test";


test("Verify drag and drop",  async ({page}) => {
    

    await page.goto("http://demo.guru99.com/test/drag_drop.html")


    const bank: Locator = page.locator("#credit2") // source1

    const credit: Locator = page.locator("#credit1") // source2

    const five1 = page.locator("#fourth").first()

    const five2 = page.locator("#fourth").nth(1)


    const target1 = page.locator("#bank")
    const target2 = page.locator("#amt7")
    const target3 = page.locator("#loan")

    const target4 = page.locator("#amt8")

    
    await bank.dragTo(target1)
    await five1.dragTo(target2)
    await credit.dragTo(target3)
    await five2.dragTo(target4)
    

    const perfect = page.getByText('Perfect!', { exact: true })
    
   await expect(perfect).toBeVisible()

    await page.waitForTimeout(1000)
    


})