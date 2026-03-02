import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 800,
    width: 1000
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Login' }).nth(1).click();

 
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();

  
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('link', { name: 'mobiles' }).click();
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'realme P4 Power 5G (' }).click();
  const page1 = await page1Promise;
  await page1.locator('div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2)').first().click();
  await page1.locator('._1psv1zeb9._1psv1ze0._1psv1zeku > div > div > div:nth-child(2)').click();
});