import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();

 

  await page.getByRole('textbox', { name: 'Username:' }).fill('Rahul');

  

  await page.getByRole('textbox', { name: 'Password:' }).fill('Rahul');

   page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  }); 
  
  await page.getByRole('button', { name: 'Sign up' }).click();
});