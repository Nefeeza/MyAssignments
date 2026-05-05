import test, { expect } from "@playwright/test";

test('Edit Individuals', async({page}) => {

    // 1. Login to Salesforce
    await page.goto('https://login.salesforce.com');
    

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();

    // 2. Click on toggle menu button from the left corner 
    await page.locator('//button[@title="App Launcher"]').click();

    //await page.waitForTimeout(30000);

    // 3. Click View All and click Individuals from App Launcher 
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//p[normalize-space()="Individuals"]/ancestor::a').click();

    // 4. Click on the Individuals tab 
    await page.locator('//div[@role="list"]//a[@title="Individuals"]').click();

    // 5. Search the Individuals last name 
    const searchName = await page.locator('//div[@type="search"]/input[@name="Individual-search-input"]');
    await searchName.fill('sample3');
    await searchName.click();

    // 6. Click on the Name and Edit
    await page.locator(`//a[@title="sample3"]/parent::div[@class="slds-grid"]`).click();
    await page.locator(`//a[@class="forceActionLink"]/div[@title="Edit"]`).click();

    // 7. Select Salutation as 'Mr' 
    await page.locator('a.select:has-text("Mr.")').click();

    // 8. Now enter the first name 
    await page.locator('//input[@placeholder="First Name"]/parent::div').fill("Jaffrin");

    // 9. Click on Save and Verify the first name 
    await page.locator('//button[@type="button"]/parent::div').click();

    await expect(page.locator('text=Jaffrin')).toBeVisible();

})