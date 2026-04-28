import test, { chromium } from "@playwright/test";

test('Launch Chromium and get title, url', async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.salesforce.com/');
    await page.locator('input[id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('input[id="password"]').fill('TestLeaf@2025');
    await page.locator('input[id="Login"]').click();

    await page.waitForTimeout(10000);

    console.log(await page.title());
    console.log(await page.url());

    await page.close();
})