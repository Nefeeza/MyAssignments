// Your task is to interact with the web elements present inside iframes 

import { test, expect } from '@playwright/test';

test('Frame LeafGround', async({page}) => {

    await page.goto('https://leafground.com/frame.xhtml');

    //  Click Me inside iFrame
    const frame = page.frameLocator('//iframe[@src="default.xhtml"]');  const btn = frame.locator('#Click');
    await btn.click();
    await expect(btn).toHaveText("Hurray! You Clicked Me.");

    // Get the total count of frames present in the page 
    const frames = page.frames();
    const count = frames.length;
    console.log(`Frame Count: ${count}`);

    // Interact with the Click Me button present inside the nested frames and Assert
    const outerFrame = page.frameLocator('(//iframe[@src="page.xhtml"])');
    const innerFrame = outerFrame.frameLocator('//iframe[@name="frame2"]');
    const button = innerFrame.locator('#Click');
    await button.click();
    await expect(button).toHaveText("Hurray! You Clicked Me.");

})