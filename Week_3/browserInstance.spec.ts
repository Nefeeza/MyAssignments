// automate basic navigation to two different websites (Red Bus and Flipkart) in two separate browser instances (Edge and Firefox) using Playwright. 


import test, { chromium, firefox } from "@playwright/test";


test('Launch browser Edge and get title', async() => {

    const browser = await chromium.launch({channel:'msedge', headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in/');
    await page.waitForTimeout(3000);

    console.log(await page.title());
    console.log(await page.url());
})

test('Launch browser Firefox and get title', async() => {

    const browser1 = await firefox.launch({headless: false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto('https://www.flipkart.com/');

    console.log(await page1.title());
    console.log(await page1.url());

})