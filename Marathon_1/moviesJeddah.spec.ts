import { test, expect, type Page } from '@playwright/test';

test('Movies Booking Flow', async({page}) => {

    async function slowScroll(page: Page) {
        for (let i = 0; i < 10; i++) {
            await page.mouse.wheel(0, 150);
            await page.waitForTimeout(500);
        }
    }

    // Launch the browser and open
    await page.goto('https://www.muvicinemas.com/en');

    // Select the city
    const dialog = page.getByRole('dialog');
    await dialog.locator('#city-Jeddah').first().click();
    await dialog.locator('#city-submit').click();

    await page.waitForTimeout(3000);

    // Select any available movie
    await slowScroll(page);
    const movieTitle = page.locator('//a//h2[normalize-space() = "MORTAL KOMBAT II"]');
    await movieTitle.click();

    // Select Date
    await page.locator('#movie-day-1').click();
    //await page.waitForTimeout(3000);

    // Select screen
    for (let i = 0; i < 3; i++) {
        await page.mouse.wheel(0, 150);
        await page.waitForTimeout(500);
    }
    // const mainDiv = page.locator('//div[@aria-expanded="true" and @role="button"]');
    // const sibDiv = mainDiv.locator('//following-sibling::div');
    // await sibDiv.getByRole('button', { name: "10:50" }).click();
    await page.locator("xpath=//button[contains(@id, 'session-IMAX')]").first().click();

    // Agree Terms and Conditions
    await page.locator('#order-init').click();

    await page.waitForLoadState();

    // Select Available seat
    
    for (let i = 0; i < 2; i++) {
        await page.mouse.wheel(0, 150);
        await page.waitForTimeout(500);
    }
    // const availableSeat = page.locator('button#normal-seat').filter({ hasNot: page.locator('.Mui-disabled')});
    const availableSeat = page.locator('//button[@id="normal-seat" and not(contains(@class,"Mui-disabled"))]');
    const count = await availableSeat.count();
    //console.log(count);
    const randomIndex = Math.floor(Math.random() * (count - 5));
    await availableSeat.nth(randomIndex).click();
    await page.locator('#confirm-seats').click();

    // Printing Seat No and Total Amount
    for (let i = 0; i < 2; i++) {
        await page.mouse.wheel(0, 150);
        await page.waitForTimeout(500);
    }
    const seatNo = page.locator('//p[text()="Seat(s) (1x)"]/following-sibling::p');
    console.log(`Seat No: ${await seatNo.innerText()}`);
    const cost = page.locator('//p[text()="Total Cost"]/following-sibling::p');
    console.log(`Total Amount: ${await cost.nth(0).innerText()}`);

})