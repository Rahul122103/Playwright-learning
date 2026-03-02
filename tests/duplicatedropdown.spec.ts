import {test, expect, Locator} from "@playwright/test";
import { text } from "node:stream/consumers";


test("Verify dropdown contains duplicates", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   // const dropDownOptions:Locator=page.locator('#colors>option');  // having duplicates
    const dropDownOptions: Locator = page.locator('#animals>option');  // not having duplicates
    
    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());


    let unique = new Set(optionsText);

    console.log(optionsText)
    console.log(unique)

    const  duplicate =   optionsText.filter((text, index) => {
        return  optionsText.indexOf(text) !== index
        //If the first index of a value is different from its current index, that value is a duplicate.
        })

    if (optionsText.length > unique.size) {

      
        
        console.log("Array have duplicate",duplicate)

    }
    else {
        console.log("Array do not have duplicate")
    }


    expect(duplicate.length).toBe(0)


})

/*
Differenyt way to find duplicate 

Logic

Set stores only unique values

If a value is already in the Set, it’s a duplicate

let arr = [1, 2, 3, 2, 4, 1];

let seen = new Set();
let duplicates: number[] = [];

for (let num of arr) {
  if (seen.has(num)) {
    duplicates.push(num);
  } else {
    seen.add(num);
  }
}

console.log(duplicates);



*/