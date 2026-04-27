// Getting title

import test, { chromium, firefox, webkit } from "@playwright/test";

test('Launch browser chrome and get title', async() => {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.amazon.sa/');
    await page.waitForTimeout(3000);

    console.log(await page.title());
})

test('Launch browser firefox and get title', async() => {

    const browser1 = await firefox.launch({headless: false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto('https://www.noon.com/saudi-en/');
    await page1.waitForTimeout(5000);

    console.log(await page1.title());
})

test('Launch browser webkit and get title', async() => {

    const browser2 = await webkit.launch({headless: false});
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://www.noon.com/saudi-en/');
    await page2.waitForTimeout(5000);

    console.log(await page2.title());
})