import test, { expect } from "@playwright/test";

test('Create Lead', async({page}) => {

    // 1. Login to Salesforce
    await page.goto('https://login.salesforce.com');
    

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    

    // 2. Click on toggle menu button from the left corner 
    await page.locator('button[title="App Launcher"]').click();

    // 3. Click view All and click Sales from App Launcher 
    await page.locator('button:has-text("View All")').click();
    //await page.waitForTimeout(30000);
    await page.locator('p[class="slds-truncate"]').click();

    // 4. Click on Leads tab  
    await page.locator('a[title="Leads"]').click();

    // 5. Click on New button 
    await page.locator('div[title="New"]').click();

    // 6. Select Salutation dropdown 
    await page.locator('button[name="salutation"]').click();
    await page.locator('lightning-base-combobox-item >> text=Mrs.').click();

    // 7. Enter the Last Name 
    await page.locator('input[name="lastName"]').fill("Sample Last");

    // 8. Enter the Company Name 
    await page.locator('input[name="Company"]').fill('Company');

    // 9. Click Save and Verify Leads name created 
    await page.locator('button[name="SaveEdit"]').click();
    await expect(page.getByText('Sample Last')).toBeVisible();

})