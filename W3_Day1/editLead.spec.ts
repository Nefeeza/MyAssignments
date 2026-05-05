import test from "@playwright/test";

test('Edit Lead', async({page}) => {

    // 1. Launch the browser 
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // 2. Enter the username 
    await page.locator('#username').fill('demoCSR2');

    // 3. Enter the password 
    await page.locator('#password').fill('crmsfa');

    // 4. Click Login
    await page.click('.decorativeSubmit');

    // 5. Click CRM/SFA link 
    await page.click('a:has-text("CRM/SFA")');

    // 6. Click Leads link
    await page.click('a:has-text("Leads")');

    // 7. Click on Create Lead
    await page.click('a:has-text("Create Lead")');

    // 8. Enter company name
    await page.locator('input[id="createLeadForm_companyName"]').fill('Company');

    // 9. Enter first name 
    await page.locator('input[id="createLeadForm_firstName"]').fill('Sample Test');

    // 10.Enter last name
    await page.locator('input[id="createLeadForm_lastName"]').fill('Last');

    // 11.Click on Create Lead button 
    await page.click('.smallSubmit');

    // 12.Click Edit 
    await page.click('div > a:has-text("Edit")');

    // 13.Change the company name 
    await page.locator('input[name="companyName"]').fill('CompanyUpdate');

    // 14.Click Update 
    await page.locator('input[value="Update"]').click();

})