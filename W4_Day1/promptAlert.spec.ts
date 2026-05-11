import { test, expect } from '@playwright/test';

test('Handle JS Prompt and verify result', async ({ page }) => {

    // 1. Navigate to URL
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // 2. Set up dialog handler BEFORE clicking
    page.on('dialog', async (alert) => {

        // Capture and print alert message
        console.log('Alert message:', alert.message());

        // Enter text and accept
        await alert.accept('Playwright');
    });

    // 3. Click on JS Prompt button
    await page.click(`//button[normalize-space()= "Click for JS Prompt"]`);

    // 4. Verify result message
    const result = page.locator('#result');
    await expect(result).toHaveText('You entered: Playwright');
});