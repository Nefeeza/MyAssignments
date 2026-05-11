import test from "@playwright/test";

test('Login with xpath', async({page}) => {

    await page.goto('https://login.salesforce.com');

    // await page.locator(`//input[@id="username"]/parent::div[@id="username_container"]`).fill('dilipkumar.rajendran@testleaf.com');

    // await page.locator('//label[text()="Username"]/following-sibling::input').fill('dilipkumar.rajendran@testleaf.com');

    await page.locator('//div[contains(@id,"usernamegroup")]//child::input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');

    await page.locator('//input[@id="username"]/following::input[@id="password"]').fill('TestLeaf@2025');

    await page.locator('//form[@id="login_form"]//child::input[@id="Login"]').click();
    
})