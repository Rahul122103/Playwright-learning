import { test, expect, Locator } from "@playwright/test"



test("Verify Xpath-Axis ", async({page}) => {
    
    await page.goto("https://www.w3schools.com/html/html_tables.asp")


    // self

    /*
Selects the current node. 

//table[@id='customers']//td[text()="Germany"]/self::td 
➡ Selects the <td> with text Germany.




just for understanding not required

Types of Nodes
While "node" is a general term, there are several specific types:
Document Node: Represents the entire web page.
Element Nodes: Represent HTML tags like <body> or <p>.
Text Nodes: Represent the text content within elements.
Comment Nodes: Represent HTML comments.
Attribute Nodes: Represent element attributes. 
    */
    
    
    

    const City: Locator = page.locator("//td[text()='Germany']/self::td")
    
    await expect(City).toHaveText("Germany")
    

    console.log(await City.textContent())




    // Parent axis

    /*
    What is Parent Axis in XPath?

👉 Parent axis is used to move from a child element to its parent element in the DOM tree.


Selects the parent of the current node. 
//td[text()="Germany"]/parent::tr 
➡ Selects the <tr> that contains the Germany cell.

    */
    
    
    const Parentdata: Locator = page.locator("//td[text()='Germany']/parent::tr")
    
    // await expect(Parentdata).toContainText("Alfreds Futterkiste")
    
    await expect(Parentdata).toContainText("Alfreds Futterkiste Maria Anders Germany")// working


    

    console.log(await Parentdata.textContent())



    // Child Axis - Child axis moves from parent to child element.
    /*
    Selects children of the current node. 
//table[@id='customers']/child::tbody 
➡ Selects the <tbody> of the table.
    */
    
    
    const childelement: Locator = page.locator("//table[@id ='customers']//tr[3]/child::td")
    
    await expect(childelement).toHaveCount(3)
    
    console.log(await childelement.allTextContents())




    // Ancestor

    /*
    what does ancestor mean? (plain English)

👉 An ancestor is any parent up the tree, not just the immediate one.

Think of family:

Parent → direct

Ancestor → parent, grandparent, great-grandparent…

What is ancestor axis?

👉 Ancestor axis moves upward from a known child element to any of its parent levels.

    */

    
    const ancestorA: Locator = page.locator("//td[text() = 'Germany']/ancestor::table")
    
    await expect(ancestorA).toHaveAttribute('id', 'customers')
    
    console.log(await ancestorA.allTextContents())




    // decendant
    /*
Descendant axis moves downward from a parent to find elements anywhere inside it (not just direct children).

    */
    
    const allchildren: Locator = page.locator("//table[@id='customers']/descendant::td")
    
    await expect(allchildren).toHaveCount(18)
    



    // following

    
    /*
    First: what does following mean? (plain English)

👉 Following means everything that comes after an element in the page order,
not just next to it — anywhere later in the DOM.

Think of reading a page top → bottom:

Whatever appears after a given element = following


it will take all element sibling and its child 



    */
    
 const followingelement:Locator=  page.locator("//td[text()='Germany']/following::td[1]")
/*
//td[text()='Germany']/following::td[1]
through index we can locator to another element 

//td[text()='Germany']/following::td- this will get all element of td 

*/
    
    await expect(followingelement).toHaveCount(1)
    






    // following-sibling - Only next elements with same parent
 /*
 
What is the following-sibling axis?

👉 following-sibling selects elements that are at the same level and appear after the current element.

It answers:

“Next to me (same parent), what comes after?”
 */

    
    
    const folloowingsibling: Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td")
    
    await expect(folloowingsibling).toHaveCount(1)
    






    //  preceding - Reverse of following

    
    const all_element: Locator = page.locator("//td[text()='Germany']/ preceding::td")
    
    await expect(all_element).toHaveCount(2)



    // //  preceding-sibling - Reverse of following-sibling



const left_sibling: Locator = page.locator("//td[text()='Germany']/ preceding-sibling::*")
    
    await expect(left_sibling).toHaveCount(2)

})