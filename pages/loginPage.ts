import { Page, Locator } from "@playwright/test";

// 1st we need page and locator

export class loginpage {

    // readonly -> The value can be assigned only once (usually in the constructor) 
    // and cannot be reassigned later.

    readonly page: Page
    readonly loginlink: Locator
    readonly usename: Locator
    readonly password: Locator
    readonly loginButton: Locator
    readonly logoutButton:Locator

    
     



constructor(page:Page) {
   
    this.page = page
    this.loginlink = page.getByRole('link', { name: 'Log in' })
    this.usename = page.locator('#loginusername')
    this.password = page.locator('#loginpassword')
    this.loginButton = page.getByRole('button', { name: 'Log in' })
    this.logoutButton=page.getByRole('link', { name: 'Log out' })
    }



    async logininfo(usename:string,password:string) {
      
        await this.loginlink.click()

        await this.usename.fill(usename)
        
        await this.password.fill(password)
        
        await this.loginButton.click()
    }
    
    async isloginsuccessfull() {

        
       
        if ( await this.logoutButton.isVisible()) {
        
            return true;
        }
        
       return false;
        
    }
    

    async logout() {
      
     await   this.logoutButton.click()
      

  }



}