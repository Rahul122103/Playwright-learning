import{test,expect, Locator} from "@playwright/test"

/*
Lab 1: Handling Dynamic Web Tables 
URL: https://testautomationpractice.blogspot.com/ 
Objective: Extract and compare process data from a dynamic web table. 
Test Scenarios: 
• Retrieve the CPU Load value for the Chrome process and compare it against the value 
displayed in the yellow label. 
• Retrieve the Memory Usage value for the Firefox process and compare it against the value 
displayed in the blue label. 
• Retrieve the Network Speed value for the Chrome process and compare it against the value 
displayed in the orange label. 
• Retrieve the Disk Space value for the Firefox process and compare it against the value 
displayed in the violet label. 

*/

test("Verift lab1 ",async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    

    // locate table body


    let trows: Locator[] = await page.locator("#rows tr").all()
let cpu:string =""

    for (let row of trows) {
        
        let text: string = await row.locator("td").nth(0).innerText()
        
        if (text === 'Chrome') {
             cpu = await row.locator('td', { hasText: '%' }).innerText()
            
            console.log("Value of CPU", cpu)
            
            break;

        }
        
    
    }


    
    let cpuoutervalue: string = await page.locator(".chrome-cpu").innerText()
    
   // expect(cpuoutervalue).toContain(cpu)

    if (cpuoutervalue.includes(cpu)) {
        
        console.log(`Cpu value is matched nows :   ${cpuoutervalue} and ${cpu} both are same `  )
    }
    else {
        console.log("Cpu value is not matched")
}
    expect(cpuoutervalue).toContain(cpu)


    // All others cases are same 

})


/*

Lab 2: Extract Data from a Paginated Table 
URL: https://testautomationpractice.blogspot.com/ 
Objective: Read and print data from a table that uses pagination.


*/

test.only("Verift lab2 ",async ({page}) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/")


    let pages: Locator[] = await page.locator("#pagination li").all()
    
    for (let i = 0; i < pages.length; i++){
        await pages[i].click()
        
         let tbody: Locator[] = await page.locator("#productTable>tbody>tr").all()
    
    for (let row of tbody) {
        console.log(await row.innerText())
    }
    }
    
    })
