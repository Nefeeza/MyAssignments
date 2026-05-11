import { test, expect } from '@playwright/test';

test('Handle Nested Frames', async ({ page }) => {

    // Launch WebPage
    await page.goto('https://leafground.com/frame.xhtml');

    // Outer frame
    const outerFrame = page.frameLocator('(//iframe[@src="page.xhtml"])');

    // Inner frame
    const innerFrame = outerFrame.frameLocator('//iframe[@name="frame2"]');

    // Locate button inside inner frame
    const button = innerFrame.locator('#Click');

    // Click the button
    await button.click();
})