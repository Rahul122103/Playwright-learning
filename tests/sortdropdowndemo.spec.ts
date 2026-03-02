
// Multidropdown



import { test, expect, Locator } from "@playwright/test"
import { text } from "node:stream/consumers"


test("Verify Multidropdown", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1st locate all element 
  //  const dropDownOptions: Locator = page.locator("#colors>option")
     const dropDownOptions:Locator=page.locator('#animals>option');  // sorted


 // Now Use find the text values of all locator (All text content) and trim the text if its required 

    const alloption: string[] = await dropDownOptions.allTextContents()
    
    // now trim()

    const trimtext: string[] = alloption.map((text) => text.trim())
    

    // now do operation

    const originalarrray: string[] = [...trimtext];

    const sortarray: string[] = [...trimtext].sort()

    /* here need to undertand some things 

    -> sort() mutates the array because it rearranges the elements in the same memory 
    instead of creating a new array.
    Means It change the original array 

    2️⃣ Why did JavaScript design sort() this way?
Reason 1️⃣: Performance (BIG reason)

Creating a new array means:

Allocate new memory

Copy all elements

More CPU + memory usage


->Sorting in place: 

Rearranges existing elements

Faster

Less memory usage

👉 Sorting is usually done on large arrays, so performance matters.


    */
    
 /*
 
 What does [...arr] mean? -> Its spread operator [...]

[...arr]


Means:

Create a NEW array and copy all elements of arr into it.


3️⃣ Example (step by step)
let arr = [3, 1, 2];
let copy = [...arr];


Internally this becomes:

copy = [3, 1, 2];


But:

copy is a new array

arr is unchanged

 */


    console.log("Original Array", originalarrray)
    
    console.log("Sort array Array", sortarray)
    

    expect(originalarrray).toEqual(sortarray)
    









  
    


})