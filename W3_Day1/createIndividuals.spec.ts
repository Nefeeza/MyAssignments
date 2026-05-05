import test, { expect } from "@playwright/test";

test('Create Individuals', async({page}) => {

    // 1. Login to Salesforce
    await page.goto('https://login.salesforce.com');
    

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();

    // 2. Click on toggle menu button from the left corner 
    await page.locator('button[title="App Launcher"]').click();

    // 3. Click View All and click Individuals from App Launcher 
    //await page.locator('//button[normalize-space()="View All"]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//p[normalize-space()="Individuals"]/ancestor::a').click();

    // 4. Click on the Dropdown icon in the Individuals tab 
    await page.locator('//span[normalize-space()="Individuals List"]/parent::a').click();
    

    // 5. Click on New Individual 
    await page.getByText('New Individual').click();

    // 6. Enter the Last Name
    await page.getByPlaceholder('Last Name').fill('sample3');
    
    // 7. Click save and verify Individuals Name 
    await page.click('button[title="Save"]');
    await expect(page.locator('text=sample3')).toBeVisible();
})