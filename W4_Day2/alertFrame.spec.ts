// Automating Alert & Frame Interactions 

import { test, expect } from '@playwright/test';

test('Handle alert inside iframe and verify text', async ({ page }) => {

    // 1. Launch URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    // 2. Handle alert using event listener
    page.on('dialog', async (alert) => {

        console.log('Alert message:', alert.message());

        // Accept the alert
        await alert.accept();

    });

    // 3. Switch to iframe
    const frame = page.frameLocator('#iframeResult');

    // 4. Click "Try it" button
    await frame.locator('button').click();

    // 5. Locate result after alert
    const resultText = frame.locator('#demo');

    // 6. Assertion
    await expect(resultText).toHaveText('You pressed OK!');

});