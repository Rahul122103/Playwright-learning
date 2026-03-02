import { test, expect } from "@playwright/test";


test.describe.serial("Group1 @g1", () => {
    


 test("test1", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test1")
    


 }) 


 test("test2", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test2")
    


}) 




test("test3", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test3")
    


}) 


test("test4", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test4")
    


})

test("test5", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test5")
    


})
    
     })


     test.describe.parallel("ParallelGroup1 @g2", () => {
    
test("test6", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test6")
    


})


test("test7", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test7")
    


})




    test("test8", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test8")
    


    })
    test("test9", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test9")
    


    })

    test("test10", async ({ page }) => {
    

    await page.goto("https://www.google.com/")
    
    await expect(page).toHaveTitle("Google")
    
    console.log("this is Test10")
    


})


 })

